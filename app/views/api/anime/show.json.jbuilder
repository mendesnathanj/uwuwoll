json.anime do
  json.extract! @anime, :id, :title, :description, :publisher, :slug
  json.season_ids @anime.season_ids.reverse
  json.episode_ids @anime.episode_ids.sort.reverse
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
  @anime.episodes.with_attached_thumbnail.sort.each do |episode|
    json.set! episode.id do
      json.extract! episode, :id, :title, :description, :episode_num, :anime_id, :season_id, :slug
      if episode.thumbnail.attached?
        json.thumbnail url_for(episode.thumbnail)
      else
        json.thumbnail nil
      end

      if episode.video.attached?
        json.video url_for(episode.video)
      else
        json.video nil
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

json.lists do
  list = current_user.list
  json.set! list.id do
    json.extract! list, :id, :user_id, :saved_anime_ids
  end
end

json.saved_anime do
  current_user.saved_anime.each do |saved_anime|
    json.set! saved_anime.id do
      json.extract! saved_anime, :id, :list_id, :anime_id, :favorited
    end
  end
end
