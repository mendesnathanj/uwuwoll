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

class Episode < ApplicationRecord
  extend FriendlyId

  friendly_id :title, use: :slugged

  validates :title, :episode_num, presence: true
  validates :episode_num, uniqueness: { scope: :anime_id }

  belongs_to :season, optional: true
  belongs_to :anime

  has_one_attached :video
  has_one_attached :thumbnail

  has_many :comments
end
