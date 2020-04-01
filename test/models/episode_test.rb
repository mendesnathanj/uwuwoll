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

require 'test_helper'

class EpisodeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
