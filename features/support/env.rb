# Generated by cucumber-sinatra. (2013-11-12 12:20:29 +0000)

ENV['RACK_ENV'] = 'test'

require File.join(File.dirname(__FILE__), '..', '..', './app.rb')

require 'capybara'
require 'capybara/cucumber'
require 'rspec'

Capybara.app = App

class AppWorld
  include Capybara::DSL
  include RSpec::Expectations
  include RSpec::Matchers
end

World do
  AppWorld.new
end