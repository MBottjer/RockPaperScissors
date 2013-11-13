require 'sinatra'
require './lib/wins'

class App < Sinatra::Base

	get '/' do
	  erb :index
	end

	post '/results' do
		 	user = params[:result]
			Result.create(:winner => user)
			return Result.all(:winner => "You win!").count.to_s
	end

	post '/computerwin' do 
		return Result.all(:winner => "The Computer wins!").count.to_s
	end

end
