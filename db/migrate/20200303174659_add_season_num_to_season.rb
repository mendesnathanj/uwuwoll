class AddSeasonNumToSeason < ActiveRecord::Migration[5.2]
  def change
    add_column :seasons, :season_num, :integer
  end
end
