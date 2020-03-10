# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  belongs_to :user
  has_many :saved_anime, dependent: :destroy
  has_many :episodes, through: :saved_anime
end
