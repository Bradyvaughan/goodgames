class LibraryLink < ApplicationRecord
  validates :library, :game, presence: true
  validates :library, uniqueness: {scope: :game,
    message: "You already have that game in that library!"}

  belongs_to :library
  belongs_to :game
end
