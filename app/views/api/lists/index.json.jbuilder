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
  @list.saved_anime.each do |saved_anime|
    json.set! saved_anime.anime_id do
      json.extract! saved_anime.anime, :id, :title
      json.episode_ids saved_anime.anime.episode_ids
    end
  end
end

json.episodes do
  @list.episodes.each do |episode|
    json.set! episode.id do
      json.extract! episode, :id, :title, :description, :episode_num
    end
  end
end
