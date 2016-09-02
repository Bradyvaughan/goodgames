class Review < ApplicationRecord
  validates :user, :game, :title, :body, presence: true
  validates :game, uniqueness: { scope: :user,
  message: "You have already reviewed this game!"}

  belongs_to :user
  belongs_to :game
end
