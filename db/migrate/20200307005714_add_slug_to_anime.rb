class AddSlugToAnime < ActiveRecord::Migration[5.2]
  def change
    add_column :animes, :slug, :string
    add_index :animes, :slug, unique: true
  end
end
