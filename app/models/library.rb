class Library < ApplicationRecord
  validates :user, :name, presence: true
  validates :name, uniqueness: { scope: :user,
    messsage: "You already have a library by that name!"}

  belongs_to :user
  has_many :library_links

  has_many :games,
  through: :library_links,
  source: :game
end
