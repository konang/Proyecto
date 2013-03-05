class CreateProblems < ActiveRecord::Migration
  def self.up
    create_table :problems do |t|
      t.integer :idprob
      t.string :tip
      t.string :name
      t.string :description
      t.integer :value

      t.timestamps
    end
  end

  def self.down
    drop_table :problems
  end
end
