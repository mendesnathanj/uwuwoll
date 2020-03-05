class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :episode_num, null: false
      t.integer :season_id, null: false

      t.timestamps
    end
    add_index :episodes, :title
    add_index :episodes, :season_id
  end

end
