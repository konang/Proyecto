class Participant < ActiveRecord::Base
  validates_uniqueness_of :idpart, :message => "Ya existe ese participante"
end
