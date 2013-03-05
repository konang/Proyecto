class CreateConcursos < ActiveRecord::Migration
  def self.up
    create_table :concursos do |t|
      t.integer :idconcurso
      t.date :fecha_ini
      t.date :fecha_fin

      t.timestamps
    end
  end

  def self.down
    drop_table :concursos
  end
end
