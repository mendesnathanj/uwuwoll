SEED_EPISODES = true
SEED_POSTERS = true
ANIME_LIMIT = 100
EPISODE_LIMIT = 20
RESEED_EVERYTHING = true

BUCKET = 'https://uwuwoll-seeds.s3-us-west-1.amazonaws.com/'
FILE_FORMAT = '.mp4'


return unless RESEED_EVERYTHING

puts 'Destroying all tables'
List.destroy_all
SavedAnime.destroy_all
Episode.destroy_all
Season.destroy_all
Anime.destroy_all
User.destroy_all


puts 'Creating Users'
u1 = User.create(username: 'uwukween', email: 'uwukween@uwu.com', password: 'password')
u2 = User.create(username: 'wyansawms', email: 'wyansawms@awms.com', password: 'password')
u3 = User.create(username: 'weactkween', email: 'weactkween@weact.com', password: 'password')
u4 = User.create(username: 'scwott', email: 'scwott@uwu.com', password: 'password')


# Seed anime data
BASE_URL = 'https://www.crunchyroll.com'

main_page = Nokogiri::HTML.parse(open('https://www.crunchyroll.com/videos/anime'))
sleep(1)

small_portraits = main_page.css('a.portrait-element img.portrait')
anime_hrefs = main_page.css('a.portrait-element').map { |h| h[:href] }

small_portraits.length.times do |i|
  anime_num = i
  break if anime_num >= ANIME_LIMIT

  # all information for an anime
  small_portrait = small_portraits[i]
  anime_page = anime_hrefs[i]

  anime_page = BASE_URL + anime_page
  anime_page = Nokogiri::HTML.parse(open(anime_page))
  sleep(0.2)

  large_portrait = anime_page.css('.poster').first

  title = small_portrait[:alt]

  description = anime_page.css('span.more').first
  description = anime_page.css('span.trunc-desc').first if description.nil?
  description = description.text.strip

  publisher = anime_page.search('.detail-heading ~ .text-link').first.text.strip

  puts "Creating anime: #{title}..."
  anime = Anime.create(title: title, description: description, publisher: publisher)

  if SEED_POSTERS
    file_name_base = title.downcase.gsub(/[!',\-\.\/":]/, '').split.join('_') + '.jpg'
    file_name_small = 'small_' + file_name_base
    file_name_large = 'large_' + file_name_base
    small_file = small_portrait[:src].nil? ? small_portrait.values.last : small_portrait[:src]
    large_file = large_portrait[:src].nil? ? large_portrait.values.last : large_portrait[:src]
    anime.small_poster.attach(io: open(small_file), filename: file_name_small)
    anime.large_poster.attach(io: open(large_file), filename: file_name_large)
  end

  # now get all information for a season
  season_tags = anime_page.css('.season-dropdown').reverse

  episode_num = 1
  if season_tags.length.positive? # if there are seasons, then create them
    season_tags.each_with_index do |season_tag, j|
      season_title = season_tag.text

      puts "Creating season: #{season_title}..."
      season = Season.create(title: season_title, anime_id: anime.id, season_num: j + 1)

      if season_title.include?("'")
        hquery = ".season-dropdown[title=\"#{season_title}\"] ~ .portrait-grid .portrait-element"
        tquery = ".season-dropdown[title=\"#{season_title}\"] ~ .portrait-grid img.landscape"
      else
        hquery = ".season-dropdown[title='#{season_title}'] ~ .portrait-grid .portrait-element"
        tquery = ".season-dropdown[title='#{season_title}'] ~ .portrait-grid img.landscape"
      end

      episode_hrefs = anime_page.search(hquery).reverse.map { |h| h[:href] }
      episode_thumbnail_tags = anime_page.search(tquery).reverse

      episode_hrefs.length.times do |k|
        break if episode_num >= EPISODE_LIMIT

        episode_href = episode_hrefs[k]
        episode_thumbnail = episode_thumbnail_tags[k]

        episode_title = episode_thumbnail[:alt]

        description_page = Nokogiri::HTML.parse(open(BASE_URL + episode_href))
        sleep(0.2)

        description = description_page.css('.description')
        description = description.first.children.map { |child| child.text.strip }.join[0...-4]

        puts "Creating episode #{episode_num}: #{episode_title}..."
        episode = Episode.create(title: episode_title, description: description, episode_num: episode_num, season_id: season.id, anime_id: anime.id)
        episode_num += 1

        if SEED_EPISODES
          file_name_base = episode_title.downcase.gsub(/[!',\-\.\/":]/, '').split.join('_') + '.jpg'
          file_name_thumbnail = 'thumb_' + file_name_base
          thumbnail_file = episode_thumbnail[:src].nil? ? episode_thumbnail.values.last : episode_thumbnail[:src]
          episode.thumbnail.attach(io: open(thumbnail_file), filename: file_name_thumbnail)
          video_name = "video#{rand(1..85)}"
          video_file = "#{BUCKET}#{video_name}#{FILE_FORMAT}"
          episode.video.attach(io: open(video_file), filename: video_name)
        end
      end

      break if episode_num >= EPISODE_LIMIT
    end
  else
    episode_hrefs = anime_page.search(".season .portrait-element").reverse.map { |h| h[:href] }
    episode_thumbnail_tags = anime_page.search(".season img.landscape").reverse

    episode_hrefs.length.times do |k|
      episode_href = episode_hrefs[k]
      episode_thumbnail = episode_thumbnail_tags[k]

      episode_title = episode_thumbnail[:alt]

      description_page = Nokogiri::HTML.parse(open(BASE_URL + episode_href))
      sleep(0.2)

      description = description_page.css('.description')
      description = description.first.children.map { |child| child.text.strip }.join[0...-4]

      puts "Creating episode #{episode_num}: #{episode_title}..."
      episode = Episode.create(title: episode_title, description: description, episode_num: episode_num, season_id: nil, anime_id: anime.id)
      episode_num += 1

      break if episode_num >= EPISODE_LIMIT

      if SEED_EPISODES
        file_name_base = episode_title.downcase.gsub(/[!',\-\.\/":]/, '').split.join('_') + '.jpg'
        file_name_thumbnail = 'thumb_' + file_name_base
        thumbnail_file = episode_thumbnail[:src].nil? ? episode_thumbnail.values.last : episode_thumbnail[:src]
        episode.thumbnail.attach(io: open(thumbnail_file), filename: file_name_thumbnail)
      end
    end
  end
end

# Seed saved anime
anime = Anime.all
User.all.each do |user|
  rand(5..15).times { user.save_anime(anime.sample) }
  # 1.times { user.save_anime(anime.sample) }
end
