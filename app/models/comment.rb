# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  content    :text             not null
#  spoiler    :boolean          default(FALSE), not null
#  user_id    :integer
#  episode_id :integer          not null
#  parent_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :content, presence: true, if: :user_id

  belongs_to :episode
  belongs_to :parent, class_name: 'Comment', optional: true
  belongs_to :author, foreign_key: :user_id, class_name: 'User', optional: true
end
