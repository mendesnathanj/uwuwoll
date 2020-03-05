json.anime do
  @anime.each do |anime|
    json.set! anime.id do
      json.extract! anime, :id, :title, :description, :publisher
      json.season_ids anime.season_ids.reverse
      json.episode_ids anime.episode_ids.reverse
      json.episode_count anime.episodes.length
    end
  end
end

json.seasons do
  @anime.each do |anime|
    anime.seasons.each do |season|
      json.set! season.id do
        json.extract! season, :id, :title, :season_num, :anime_id
        json.episode_ids season.episode_ids.reverse
      end
    end
  end
end

json.episodes do
  @anime.each do |anime|
    anime.episodes.each do |episode|
      json.set! episode.id do
        json.extract! episode, :id, :title, :description, :episode_num, :season_id
      end
    end
  end
end
