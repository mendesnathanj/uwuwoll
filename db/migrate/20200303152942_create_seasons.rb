class CreateSeasons < ActiveRecord::Migration[5.2]
  def change
    create_table :seasons do |t|
      t.string :title, null: false
      t.integer :anime_id, null: false

      t.timestamps
    end
    add_index :seasons, :anime_id
  end

end
