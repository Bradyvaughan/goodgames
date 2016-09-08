class Game < ApplicationRecord
  validates :title, :release_date, :platform, :cover, presence: true

  has_many :library_links
  has_many :reviews
  has_many :ratings

  has_many :libraries,
  through: :library_links,
  source: :library
end
