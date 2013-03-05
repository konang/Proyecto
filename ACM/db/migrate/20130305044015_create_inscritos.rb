class CreateInscritos < ActiveRecord::Migration
  def self.up
    create_table :inscritos do |t|
      t.string :idpart_id
      t.integer :idconcurso_id
      t.integer :puntaje
      t.integer :posicion

      t.timestamps
    end
  end

  def self.down
    drop_table :inscritos
  end
end
