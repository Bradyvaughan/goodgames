json.extract! game, :title, :platform, :description, :avg_rating, :release_date, :cover

json.set! :libraries do
  json.array! game.libraries do |library|
    if library.user == current_user
      json.extract! library, :name, :user_id
    end
  end
end
