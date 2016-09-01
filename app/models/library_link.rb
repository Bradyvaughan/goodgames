class LibraryLink < ApplicationRecord
  validates :library, :game, presence: true

  belongs_to :library
  belongs_to :game
end
