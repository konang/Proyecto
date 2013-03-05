class Problem < ActiveRecord::Base
  validates_uniqueness_of :idprob, :message => "Ya existe ese problema"
end
