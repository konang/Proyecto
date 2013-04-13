class CreateParticipantes < ActiveRecord::Migration
  def self.up
    create_table :participantes do |t|
      t.string :idPart
      t.integer :mat
      t.string :nom
      t.integer :puntaje, :default =>0
      t.integer :pos, :default =>1

      t.timestamps
    end
  end

  def self.down
    drop_table :participantes
  end
end
