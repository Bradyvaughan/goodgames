class Game < ApplicationRecord
  validates :title, :cover, :published_on, :avg_rating, presence: true

  has_many :library_links
end
