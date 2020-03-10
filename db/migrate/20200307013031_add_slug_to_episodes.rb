class AddSlugToEpisodes < ActiveRecord::Migration[5.2]
  def change
    add_column :episodes, :slug, :string
    add_index :episodes, :slug, unique: true
  end
end
