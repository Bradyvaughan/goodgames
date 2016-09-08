class Rating < ApplicationRecord
  validates :user, :game, :num, presence: true
  validates :user, uniqueness: { scope: :game }

  belongs_to :game
  belongs_to :user
end
