class CreateSemanas < ActiveRecord::Migration
  def self.up
    create_table :semanas do |t|
      t.integer :idSemana
      t.date :fecha_ini
      t.date :fecha_fin

      t.timestamps
    end
  end

  def self.down
    drop_table :semanas
  end
end
