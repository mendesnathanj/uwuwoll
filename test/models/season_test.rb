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

require 'test_helper'

class SeasonTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
