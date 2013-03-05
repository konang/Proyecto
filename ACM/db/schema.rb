# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130305044015) do

  create_table "concursos", :force => true do |t|
    t.integer  "idconcurso"
    t.date     "fecha_ini"
    t.date     "fecha_fin"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "inscritos", :force => true do |t|
    t.string   "idpart_id"
    t.integer  "idconcurso_id"
    t.integer  "puntaje"
    t.integer  "posicion"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "participants", :force => true do |t|
    t.string   "idpart"
    t.integer  "mat"
    t.string   "nom"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "problems", :force => true do |t|
    t.integer  "idprob"
    t.string   "tip"
    t.string   "name"
    t.string   "description"
    t.integer  "value"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "semanas", :force => true do |t|
    t.integer  "idconcurso_id"
    t.integer  "idprob_id"
    t.integer  "semana"
    t.date     "fecha_ini"
    t.date     "fecha_fin"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
