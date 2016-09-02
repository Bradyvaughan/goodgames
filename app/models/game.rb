class Game < ApplicationRecord
  validates :title, :cover, :published_on, :avg_rating, presence: true

  has_many :library_links

  has_many :libraries,
  through: :library_links,
  source: :library
end
