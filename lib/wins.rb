require 'data_mapper'


class Result

  include DataMapper::Resource 

  property :id, Serial 
  property :winner, String

end