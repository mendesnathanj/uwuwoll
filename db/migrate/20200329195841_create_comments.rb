class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :content, null: false
      t.boolean :spoiler, null: false, default: false
      t.integer :user_id, null: false
      t.integer :episode_id, null: false
      t.integer :parent_id

      t.timestamps
    end

    add_index :comments, :user_id
    add_index :comments, :episode_id
    add_index :comments, :parent_id
  end
end
