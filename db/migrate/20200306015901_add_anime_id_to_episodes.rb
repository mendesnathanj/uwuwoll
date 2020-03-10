class AddAnimeIdToEpisodes < ActiveRecord::Migration[5.2]
  def change
    change_column_null :episodes, :season_id, true
    add_column :episodes, :anime_id, :integer, null: false
  end
end
