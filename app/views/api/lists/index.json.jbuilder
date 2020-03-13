json.lists do
  json.set! @list.id do
    json.extract! @list, :id, :user_id, :saved_anime_ids
  end
end

json.saved_anime do
  @list.saved_anime.each do |saved_anime|
    json.set! saved_anime.id do
      json.extract! saved_anime, :id, :list_id, :anime_id, :favorited
    end
  end
end

json.anime do
  anime_ids = @list.saved_anime.map(&:anime_id)

  Anime.with_attached_small_poster.where(id: anime_ids).each do |anime|
    json.set! anime.id do
      json.extract! anime, :id, :title, :description, :slug
      json.small_poster url_for(anime.small_poster)
      json.episode_ids anime.episode_ids
      json.season_ids anime.season_ids
    end
  end
end

json.episodes do
  @list.episodes.with_attached_thumbnail.each do |episode|
    json.set! episode.id do
      json.extract! episode, :id, :title, :description, :episode_num, :anime_id, :season_id, :slug
      # json.video url_for(episode.video)
      json.thumbnail url_for(episode.thumbnail)
    end
  end
end
