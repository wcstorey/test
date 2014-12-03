get '/' do
  if current_user
        redirect ('/post/all')
  else
        redirect ('/login')
  end
end

# Lists All Posts
get '/post/all' do
 @posts=Post.all
  erb :'post/all'
end

# List User's Posts
get '/post/user/:id' do
@posts=current_user.posts
 erb :'post/all'
end

# New Post
get '/post/new' do
  erb :'post/new'
end

post '/post/new' do
  post = Post.new(params[:post])
  post.user_id=current_user.id

  if post.save
    # post.create_revision(params[:revision][:content], current_user)
    redirect("/post/#{post.id}")
  else
    session[:error] = "Incorrect entry"
    redirect("/post/new")
  end
end

# Shows Individual Posts
get '/post/:id' do |id|
  @post = Post.find(id)
  @post.user_id
  erb :'post/show'
end

# Delete
delete '/post/:id' do |id|
  post = Post.find(id)
  post.destroy
  redirect('/post/all')
end

# Update
get '/post/:id/edit' do |id|
  @post = Post.find(id)
  erb :'post/update'
end

put '/post/:id' do |id|
  post = Post.find(id)
  if post.update(params[:post])
    redirect("/post/#{post.id}")
  else
    session[:error] = "Incorrect entry"
    redirect("/post/#{post.id}/edit")
  end
end
