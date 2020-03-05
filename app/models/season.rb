# == Schema Information
#
# Table name: seasons
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  anime_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  season_num :integer
#

class Season < ApplicationRecord
  validates :title, presence: true
  validates :season_num, uniqueness: { scope: :anime_id }

  belongs_to :anime
  has_many :episodes
end
