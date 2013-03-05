class Concurso < ActiveRecord::Base
  validates_uniqueness_of :idconcurso, :message => "Ya existe ese concurso"
end
