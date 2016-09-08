class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.text :description, default: "Description not found"
      t.string :release_date, null: false
      t.string :platform, null: false
      t.string :cover, null: false

      t.timestamps
    end
  end
end
