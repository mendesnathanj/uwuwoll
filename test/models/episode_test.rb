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

require 'test_helper'

class EpisodeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
