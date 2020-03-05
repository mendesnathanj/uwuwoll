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
#

class Anime < ApplicationRecord
  validates :title, :description, :publisher, presence: true

  has_many :seasons, dependent: :destroy
  has_many :episodes, through: :seasons

  # def latest_season
  #   seasons.max_by { |season| season.season_num }
  # end

  # # generating n + 1 queries for some reason
  # def recent_episodes
  #   latest_season.episodes.order(episode_num: :desc).limit(2)
  # end

  # also generates n + 1 queries
  # def episode_count
  #   episodes.count
  # end
end
