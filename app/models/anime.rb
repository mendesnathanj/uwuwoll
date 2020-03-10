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
  extend FriendlyId

  friendly_id :title, use: :slugged

  validates :title, :description, :publisher, presence: true

  has_many :seasons, dependent: :destroy
  has_many :episodes

  has_one_attached :large_poster
  has_one_attached :small_poster

  def episode_count
    episodes.length
  end
end
