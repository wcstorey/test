def current_user
  # if session[:user_id]
  #   return User.find_by_id(session[:user_id])
  # else
  #   return nil
  # end

  User.find_by_id(session[:user_id])
end
