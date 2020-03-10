json.anime do
  json.extract! @anime, :id, :title, :description, :publisher, :slug
  json.season_ids @anime.season_ids.reverse
  json.episode_ids @anime.episode_ids.sort
  json.large_poster url_for(@anime.large_poster)
  json.small_poster url_for(@anime.small_poster)
  json.episode_count @anime.episodes.length
end

json.seasons do
  @anime.seasons.each do |season|
    json.set! season.id do
      json.extract! season, :id, :title, :season_num, :anime_id
      json.episode_ids season.episode_ids.reverse
    end
  end
end

json.episodes do
  @anime.episodes.with_attached_video.sort.each do |episode|
    json.set! episode.id do
      json.extract! episode, :id, :title, :description, :episode_num, :anime_id, :season_id, :slug
      if episode.video.attached?
        json.video_url url_for(episode.video)
      else
        json.video_url nil
      end
    end
  end
end

json.slugs do
  json.anime do
    json.set! @anime.slug do
      json.id @anime.id
    end
  end

  json.episodes do
    @anime.episodes.each do |episode|
      json.set! episode.slug do
        json.id episode.id
      end
    end
  end
end
