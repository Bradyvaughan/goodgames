json.extract! game, :title, :platform, :description, :release_date, :cover, :id


rates = game.ratings
rate = 0
rates.each { |rating| rate += rating.num.to_f / rates.length }

json.avg_rating rate.round(1)


user_rating = Rating.find_by({game_id: game.id, user_id: current_user.id}) if current_user

if user_rating
  u_rating = user_rating.num
else
  u_rating = 0
end

json.user_rating u_rating

json.set! :libraries do
  json.array! game.libraries do |library|
    if library.user == current_user
      json.extract! library, :name, :user_id, :id
    end
  end
end
