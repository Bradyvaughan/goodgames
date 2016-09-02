class CreateLibraryLinks < ActiveRecord::Migration[5.0]
  def change
    create_table :library_links do |t|
      t.integer :game_id, null: false
      t.integer :library_id, null: false
      t.timestamps
    end
    add_index(:library_links, [:game_id, :library_id], unique: true)
  end
end
