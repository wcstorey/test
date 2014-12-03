class User < ActiveRecord::Base
  has_secure_password
  # Remember to create a migration!
  has_many :posts
  has_many :comments, through: :posts
end
