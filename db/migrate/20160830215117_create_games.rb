class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.datetime :published_on, null: false
      t.float :avg_rating, null: false
      t.text :cover, null: false

      t.timestamps
    end
  end
end
