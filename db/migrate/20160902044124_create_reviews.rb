class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :game_id, null: false

      t.timestamps
    end
    add_index(:reviews, [:user_id, :game_id], unique: true)
  end
end
