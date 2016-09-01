class CreateLibraryLinks < ActiveRecord::Migration[5.0]
  def change
    create_table :library_links do |t|
      t.integer :game_id, null: false
      t.integer :library_id, null: false
      t.timestamps
    end
  end
end
