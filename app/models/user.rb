# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :session_token, :email, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }, allow_nil: true

  before_validation :ensure_session_token!
  after_create :ensure_own_list!

  attr_reader :password

  has_one :list

  has_many :saved_anime, through: :list

  def self.find_by_credentials(identifier, password)
    user = User.find_by('username = ? OR email = ?', identifier, identifier)

    user&.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    update!(session_token: SecureRandom.urlsafe_base64)
    session_token
  end

  def ensure_session_token!
    self.session_token = SecureRandom.urlsafe_base64
  end

  def ensure_own_list!
    List.create!(user_id: id)
  end

  def save_anime(anime)
    SavedAnime.create(anime_id: anime.id, list_id: list.id)
  end
end
