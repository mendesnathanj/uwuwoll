# == Schema Information
#
# Table name: animes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  publisher   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  slug        :string
#

class AnimeSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  set_id :id

  attributes :title, :description, :publisher, :slug, :episode_count, :season_ids, :episode_ids

end
