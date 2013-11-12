require 'sinatra'

# set :public_folder, File.join(File.dirname(__FILE__), 'public') #fixes CSS BUG
# set :views, File.join(File.dirname(__FILE__), 'views')

get '/' do
  erb :index
end

post '/win' do
	current_wins = IO.read('wincount.txt').to_i

	if params[:result] == "You win!"
		IO.write('wincount.txt', current_wins + 1)
		return "#{current_wins + 1}"
	end
	return current_wins.to_s
end

post '/computerwin' do

	current_wins = IO.read('compwincount.txt').to_i

	if params[:result] == "The Computer wins!"
		IO.write('compwincount.txt', current_wins + 1)
		return "#{current_wins + 1}"
	end
	return current_wins.to_s
end