json.anime do
  anime = @episode.anime
  json.set! anime.id do
    json.extract! anime, :id, :title, :publisher, :slug
    json.episode_ids anime.episode_ids.sort.reverse
    json.season_ids anime.season_ids.sort.reverse
  end
end

json.seasons do
  @episode.anime.seasons do |season|
    json.set! season.id do
      json.extract! :id, :season_num, :title, :anime_id
    end
  end
end

json.episodes do
  @episode.anime.episodes.with_attached_video.each do |episode|
    json.set! episode.id do
      json.extract! episode, :id, :title, :description, :episode_num, :season_id, :anime_id, :slug
      if episode.video.attached?
        json.video_url url_for(episode.video)
      else
        json.video_url nil
      end
      json.comment_ids episode.comment_ids
    end
  end
end

# json.episodes do
#   @episode.anime.episodes.each do |episode|
#     json.set! episode.id do
#       json.extract! episode, :id, :title, :description, :episode_num, :season_id, :anime_id, :slug
#       json.comment_ids episode.comment_ids
#     end
#   end
# end

json.comments do
  @episode.anime.episodes.each do |episode|
    episode.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :content, :spoiler, :user_id, :episode_id, :parent_id, :updated_at
      end
    end
  end
end

json.slugs do
  json.episodes do
    @episode.anime.episodes.each do |episode|
      json.set! episode.slug do
        json.id episode.id
      end
    end
  end

  json.anime do
    json.set! @episode.anime.slug do
      json.id @episode.anime.id
    end
  end
end
