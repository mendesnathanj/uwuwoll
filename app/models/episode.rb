# == Schema Information
#
# Table name: episodes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  episode_num :integer          not null
#  season_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Episode < ApplicationRecord
  validates :title, :description, :episode_num, presence: true
  validates :episode_num, uniqueness: { scope: :season_id }

  belongs_to :season
  has_one :anime, through: :season

  def anime
    Anime.find_by(id: season.anime_id)
  end
end
