class CreateProblemas < ActiveRecord::Migration
  def self.up
    create_table :problemas do |t|
      t.integer :idProb
      t.string :desc
      t.string :tip
      t.string :nom
      t.integer :valor
      t.integer :idSemana_id

      t.timestamps
    end
  end

  def self.down
    drop_table :problemas
  end
end
