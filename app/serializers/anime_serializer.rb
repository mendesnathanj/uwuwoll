class AnimeSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  set_id :id

  attributes :title, :description, :publisher, :slug, :episode_count, :season_ids, :episode_ids

end
