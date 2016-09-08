class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.integer :num, null: false

      t.timestamps
    end
    add_index(:ratings, [:user_id, :game_id], :unique => true)
    add_index(:ratings, :game_id)
  end
end
