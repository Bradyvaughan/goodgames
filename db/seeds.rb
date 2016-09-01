# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'json'
#
# seeds = []
#
# searches = ["mario", "zelda", "call of duty", "league of legends",
# "pokemon", "civilization", "metroid", "sonic", "warcarft", "starcraft",
# "diablo", "doom", "wolfenstein", "castlevania", "fable", "halo"];
#
# searches.each do |search|
#   response = Unirest.get "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Crelease_dates%2Crating%2Ccover%2Cesrb.synopsis&limit=10&offset=0&order=release_dates.date%3Adesc&search=#{search}",
#     headers:{
#       "X-Mashape-Key" => "TOlrbRqDvumshllfIs6MngQ5Tm8Fp1VNsu2jsneDxzD33IeIbO",
#       "Accept" => "application/json"
#     }
#
#   seeds << JSON.parse(response)
# end
#
# p seeds

User.create([{username: "SidMeier", email:"sid@firaxis.com", password:"civilization"},
  {username: "BenBrode", email: "Bbrode@blizzard.com", password: "HAHAHAHAHAHAHA"},
  {username: "PeterMolyneaux", email: "dunno@blank.com", password: "fables"},
  {username: "ShigeruMiyamoto", email: "bigdaddy@nintendo.com", password: "nintendo"},
  {username: "MasahiroSakurai", email: "Sakurai@nintendo.com", password: "smashbros"},
  {username: "RichardGarriott", email: "British@ultima.com", password: "lordbritish"},
  {username: "CliveBarker", email: "dunno@blank.com", password: "jericho"},
  {username: "ToddHoward", email: "Howard@bethesda.com", password: "sweetlies"},
  {username: "IceFrog", email: "IceFrog@valve.com", password: "DoftheA"},
  {username: "HideoKojima", email: "Sad@konami.com", password: "patriots"},
  {username: "GabeNewell", email: "GabeN@valve.com", password: "steamvalve"},
  {username: "Notch", email: "notch@mojang.com", password: "minecraft"},
  {username: "RobPardo", email: "Pardo@blizzard.com", password: "loktarogar"},
  {username: "SatoshiTajiri", email: "pokemonmaster@gamefreak.com", password: "catchemall"}])


Game.create([{title: "xcom", description:"best ever", published_on: DateTime.current,
  avg_rating: 4.7, cover: "placeholder"},
  {title: "Call of Duty", description: "shooty shooterson", published_on: DateTime.current,
    avg_rating: 3.2, cover: "placeholder"},
  {title: "Valkyria Chronicles", description: "realtime anime xcom", published_on: DateTime.current,
    avg_rating: 4.2, cover: "placeholder"},
  {title: "DC:SS", description:"OG roguelike", published_on: DateTime.current,
    avg_rating: 4.8, cover: "placeholder"},
  {title: "No Man's Sky", description: "Disappointment", published_on: DateTime.current,
    avg_rating: 1.6, cover: "placeholder"}])

libraries = []
User.all.each do |user|
  libraries += [{name: "Played", user_id: user.id},
    {name: "Wanting to Play", user_id: user.id},
    {name: "Currently Playing", user_id: user.id}]
end

Library.create!(libraries)

links = []

(1..5).each do |game_id|
  (1..14).each do |user_no|
    links << {game_id: game_id, library_id: user_no * 3}
  end
end

LibraryLink.create!(links)


    # "6PwCgMNcYumsh9RuphT0EtapJ2Khp1XEa01jsna6rpjcuoGGNL"

    # GiantBomb 5d89fc0c90da501c4033686e21b3bea624fa6a8a
