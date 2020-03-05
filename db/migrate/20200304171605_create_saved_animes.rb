class CreateSavedAnimes < ActiveRecord::Migration[5.2]
  def change
    create_table :saved_animes do |t|
      t.boolean :favorited, null: false, default: false
      t.integer :list_id, null: false
      t.integer :anime_id, null: false

      t.timestamps
    end

    add_index :saved_animes, [:list_id, :anime_id], unique: true
  end
end
