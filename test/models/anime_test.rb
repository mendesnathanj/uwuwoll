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
#  slug        :string
#

require 'test_helper'

class AnimeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
