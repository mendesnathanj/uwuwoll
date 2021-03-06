json.anime do
  @anime.each do |anime|
    json.set! anime.id do
      json.extract! anime, :id, :title, :slug
      json.episode_ids anime.episode_ids
      json.season_ids anime.season_ids
    end
  end
end

json.seasons do
  Season.all.each do |season|
    json.set! season.id do
      json.extract! season, :id, :title, :season_num, :anime_id
    end
  end
end


json.episodes do
  @anime.each do |anime|
    episode = anime.episodes.first

    json.set! episode.id do
      json.extract! episode, :id, :slug, :season_id, :episode_num, :anime_id, :title
      # if episode.video.attached?
      #   json.video url_for(episode.video)
      # else
      #   json.video nil
      # end
    end
  end
end

json.slugs do
  json.anime do
    @anime.each do |anime|
      json.set! anime.slug do
        json.id anime.id
      end
    end
  end

  json.episodes do
    @anime.each do |anime|
      episode = anime.episodes.first

      json.set! episode.slug do
        json.extract! episode, :id
      end
    end
  end
end
