class AllowNullUserInComment < ActiveRecord::Migration[5.2]
  def change
    change_column :comments, :user_id, :integer, null: true
  end
end
