json.users do
  json.partial! 'api/users/user', user: @user
end

json.lists do
  json.set! @user.list.id do
    json.extract! @user.list, :id, :user_id, :saved_anime_ids
  end
end
