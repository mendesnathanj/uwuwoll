# == Schema Information
#
# Table name: episodes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  episode_num :integer          not null
#  season_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  anime_id    :integer          not null
#  slug        :string
#

class EpisodeSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower

  attributes :title, :description, :episode_num, :slug, :season_id, :anime_id
end
