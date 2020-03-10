# == Schema Information
#
# Table name: saved_animes
#
#  id         :bigint           not null, primary key
#  favorited  :boolean          default(FALSE), not null
#  list_id    :integer          not null
#  anime_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SavedAnime < ApplicationRecord
  validates :anime_id, uniqueness: { scope: :list_id }
  
  belongs_to :list
  belongs_to :anime

  has_many :episodes, through: :anime
end
