class Library < ApplicationRecord
  validates :user, :name, presence: true

  belongs_to :user
  has_many :library_links

  has_many :games,
  through: :library_links,
  source: :game
end
