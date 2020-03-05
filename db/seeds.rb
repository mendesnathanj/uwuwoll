
puts 'Creating Users'
User.destroy_all
List.destroy_all

u1 = User.create(username: 'uwukween', email: 'uwukween@uwu.com', password: 'password')
u2 = User.create(username: 'wyansawms', email: 'wyansawms@awms.com', password: 'password')
u3 = User.create(username: 'weactkween', email: 'weactkween@weact.com', password: 'password')

anime_titles = [
  "Free!",
  "Lucky Star",
  "Elfen Lied",
  "Log Horizon",
  "Cardcaptor Sakura",
  "Berserk (1997)",
  "Magi: The Labyrinth of Magic",
  "Hellsing: Ultimate",
  "The Pet Girl of Sakurasou",
  "Katekyō Hitman Reborn!",
  "Yu Yu Hakusho",
  "Yona of the Dawn",
  "Charlotte",
  "Seraph of the End",
  "Akame ga Kill!",
  "When They Cry ",
  "Hyouka",
  "Ghost In The Shell (1995)",
  "Kuroko no Basket",
  "Terror In Resonance ",
  "Natsume Yuujinchou",
  "Pokemon",
  "Akira (1988)",
  "Mushishi",
  "Dragon Ball",
  "Another",
  "Spice And Wolf",
  "FLCL (Fooly Cooly)",
  "Samurai Champloo",
  "Monster",
  "Shinsekai Yori",
  "The Seven Deadly Sins",
  "Baccano!",
  "Bungou Stray Dogs",
  "Miss Kobayashi's Dragon Maid",
  "Code Geass (Season 2)",
  "Sailor Moon",
  "K-On!",
  "Nichijou (My Ordinary Life)",
  "Blue Exorcist",
  "Love Live!",
  "Anohana",
  "Inuyasha",
  "Wolf Children ",
  "Howl's Moving Castle",
  "High School DxD",
  "Shokugeki No Soma (Food Wars)",
  "Princess Mononoke",
  "Bakemonogatari",
  "Erased",
  "Mirai Nikki",
  "Psycho-Pass",
  "Naruto Shippuden",
  "Monogatari Series: Second Season",
  "Durarara!!",
  "Death Parade",
  "Clannad",
  "Kill La Kill ",
  "Bleach",
  "Full Metal Alchemist",
  "Ouran High School Host Club",
  "Fate/Zero",
  "Soul Eater",
  "Toradora",
  "Mob Psycho 100",
  "Dragon Ball Z",
  "Noragami",
  "Clannad: After Story",
  "Konosuba",
  "Black Butler",
  "Angel Beats",
  "Sword Art Online",
  "Hunter x Hunter (2011)",
  "Madoka Magica",
  "Neon Genesis Evangelion",
  "Yuri On Ice",
  "Re: Zero",
  "Spirited Away",
  "JoJo's Bizarre Adventure",
  "Gurren Lagann",
  "Haikyuu!!",
  "Gintama",
  "Assassination Classroom",
  "Hunter x Hunter",
  "Cowboy Bebop",
  "Tokyo Ghoul",
  "Naruto",
  "Fairy Tail",
  "No Game No Life",
  "Koe No Katachi (A Silent Voice)",
  "One Punch Man",
  "Code Geass",
  "Your Lie in April",
  "One Piece",
  "Steins:Gate",
  "Attack On Titan",
  "Death Note",
  "Your Name",
  "Boku No Hero Academia",
  "Full Metal Alchemist: Brotherhood"
]

publishers = [
  'Sentai Filmworks',
  'Funimation',
  'Aniplex of America',
  'Viz Media',
  'Discotek Media',
  'AnimEigo',
  'Media Blasters',
  'Pierrot',
  'Studio Ghibli',
  'Toei Animation'
]

season_titles = [
  'Season 2: Electric Boogaloo',
  'In/Spectre: Season 1',
  '2nd Season',
  'Land vs. Air',
  'To The Top',
  'Stardust Crusaders',
  'Diamond is Unbreakable',
  'Golden Wind',
  'A Certain Scientific Railgun T',
  'A Certain Scientific Railgun S',
  'Starting Life in Another World',
  'Welcome to Demon School! Iruma-kun',
  'Somali and the Forest Spirit',
  'Room Camp',
  'Asteroid in Love',
  'Second BEAT!',
]

puts 'Creating Anime'
Anime.destroy_all

animes = anime_titles.map do |title|
  description = Faker::Lorem.paragraph(sentence_count: 4,
                                       supplemental: true,
                                       random_sentences_to_add: 4)

  Anime.create(title: title, description: description, publisher: publishers.sample)
end


puts 'Creating Seasons'
Season.destroy_all

seasons = []
animes.each do |anime|
  rand(1..4).times do |i|
    seasons << Season.create(title: season_titles.sample,
                             anime_id: anime.id,
                             season_num: i + 1)
  end
end


puts 'Creating Episodes'
Episode.destroy_all

episodes = []
seasons.each do |season|
  rand(6..12).times do |i|
    title = Faker::Lorem.words(number: rand(1..3)).join(' ')
    description = Faker::Lorem.paragraph(sentence_count: 4,
                                         supplemental: true,
                                         random_sentences_to_add: 4)
    episodes << Episode.create(title: title,
                               season_id: season.id,
                               episode_num: i + 1,
                               description: description)
  end
end
