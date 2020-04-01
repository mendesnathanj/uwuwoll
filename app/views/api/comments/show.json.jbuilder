json.set! @comment.id do
  json.extract! @comment, :id, :content, :spoiler, :user_id, :episode_id, :parent_id, :updated_at
end
