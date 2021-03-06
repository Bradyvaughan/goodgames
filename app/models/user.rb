class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :email,
  presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :libraries

  has_many :games,
  through: :libraries,
  source: :games

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(32)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(32)
  end

  def is_password?(password)
    pw = BCrypt::Password.new(self.password_digest)
    pw.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
