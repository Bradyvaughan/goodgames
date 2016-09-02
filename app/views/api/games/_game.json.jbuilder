json.extract! game, :title, :cover, :description, :avg_rating, :published_on

json.set! :libraries do
  json.array! game.libraries do |library|
    if library.user == current_user
      json.extract! library, :name, :user_id
    end
  end
end
