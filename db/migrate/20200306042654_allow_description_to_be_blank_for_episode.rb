class AllowDescriptionToBeBlankForEpisode < ActiveRecord::Migration[5.2]
  def change
    change_column_null :episodes, :description, true
  end
end
