get '/login' do
  erb :'/user/login', layout: false
end

post '/login' do
  user = User.find_by(name: params[:user][:name]).try(:authenticate, params[:user][:password])

  if user
    session[:user_id] = user.id
    redirect("/")
  else
    set_error("Username not found or password incorrect.")
    redirect("/login")
  end
end

get '/signup' do
  erb :'user/signup', layout: false
end

post '/signup' do
  user = User.new(params[:user])
  if user.save
    session[:user_id] = user.id
    redirect('/')
  else
    session[:error] = user.errors.messages
    redirect ('/signup')
  end
end

get '/logout' do
  session[:user_id] = nil
  redirect("/")
end
