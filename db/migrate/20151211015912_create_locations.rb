class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.float :lat, {:precision=>10, :scale=>6}
      t.float :lng, {:precision=>10, :scale=>6}

      t.timestamps null: false
    end
  end
end
