class EpisodeSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower

  attributes :title, :description, :episode_num, :slug, :season_id, :anime_id
end
