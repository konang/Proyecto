class CreateProblemaresueltos < ActiveRecord::Migration
  def self.up
    create_table :problemaresueltos do |t|
      t.integer :idSubida
      t.date :fechasub
      t.string :estatus
      t.integer :tiempo
      t.integer :memoria
      t.integer :tam
      t.string :leng
      t.string :idPart_id
      t.integer :idProb_id

      t.timestamps
    end
  end

  def self.down
    drop_table :problemaresueltos
  end
end
