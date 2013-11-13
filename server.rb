require 'data_mapper'
require 'sinatra'

env = ENV["RACK_ENV"] || "development"

DataMapper.setup(:default, "postgres://localhost/app_#{env}")

require './app'

DataMapper.finalize

DataMapper.auto_upgrade! 