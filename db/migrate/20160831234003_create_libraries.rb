class CreateLibraries < ActiveRecord::Migration[5.0]
  def change
    create_table :libraries do |t|
      t.integer :user_id, null: false
      t.string :name, null: false

      t.timestamps
    end
    add_index( :libraries, [:user_id, :name], unique: true)
  end
end
