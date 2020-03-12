json.saved_anime do
  json.set! @saved_anime.id do
    json.extract! @saved_anime, :id, :list_id, :anime_id, :favorited
  end
end

json.lists do
  json.set! @saved_anime.list.id do
    json.extract! @saved_anime.list, :id, :user_id, :saved_anime_ids
  end
end
