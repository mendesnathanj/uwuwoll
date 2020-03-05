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

require 'test_helper'

class SavedAnimeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
