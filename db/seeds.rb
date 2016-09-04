# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



require 'nokogiri'
require 'net/http'
require 'byebug'

names = %w(starcraft warcraft diablo league duty mario zelda metriod
xcom civilization halo tetris minecraft theft scrolls battlefield
sims sonic fable clancy dota gears tomb persia final
kong goldeneye)

names.each do |name|
  url = URI.parse("http://thegamesdb.net/api/GetGamesList.php?name=#{name}")
  req = Net::HTTP::Get.new(url.to_s)
  res = Net::HTTP.start(url.host, url.port) {|http|
    http.request(req)
  }
  sleep(1)
  if  res.is_a?(Net::HTTPSuccess)
    data = Hash.from_xml(res.body)["Data"]["Game"]
    if data
      data.each do |game|
        id = game["id"]
        urll = URI.parse("http://thegamesdb.net/api/GetGame.php?id=#{id}")
        reqq = Net::HTTP::Get.new(urll.to_s)
        ress = Net::HTTP.start(url.host, url.port) {|http|
          http.request(reqq)
        }
        cover = "http://thegamesdb.net/banners/boxart/thumb/original/front/#{id}-1.jpg"


        if ress.is_a?(Net::HTTPSuccess)
          datum = Hash.from_xml(ress.body)["Data"]["Game"]

          if datum
            Game.create({title: datum['GameTitle'], release_date: datum['ReleaseDate'],
              platform: datum["Platform"], description: datum["Overview"],
              avg_rating: datum["Rating"], cover: cover})
          end
        end
      end
    end
  end
end

User.create!([{username: "SidMeier", email:"sid@firaxis.com", password:"civilization"},
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


User.create!([{username: "Bjergsen", email: "a", password: "password"},
{username: "Kibler", email: "a", password: "password"},
{username: "GrinningGoat", email: "a", password: "password"},
{username: "Savjz", email: "a", password: "password"},
{username: "BeagleRush", email: "a", password: "password"},
{username: "JoeMiller", email: "a", password: "password"},
{username: "Boxer", email: "a", password: "password"},
{username: "Grubby", email: "a", password: "password"},
{username: "TrollMaster", email: "a", password: "password"},
{username: "XxDragonxX", email: "a", password: "password"},
{username: "oXXathenaXXo", email: "a", password: "password"},
{username: "DankLord", email: "a", password: "password"},
{username: "KushKommander", email: "a", password: "password"},
{username: "Memester", email: "a", password: "password"},
{username: "Voldrak", email: "a", password: "password"},
{username: "Synoche", email: "a", password: "password"},
{username: "360NoScope", email: "a", password: "password"},
{username: "Vargas", email: "a", password: "password"},
{username: "CANTTRUSTHILLARY", email: "a", password: "password"},
{username: "Unidan", email: "a", password: "password"},
{username: "DoubleLift", email: "a", password: "password"},
{username: "NoobCrusher", email: "a", password: "password"}])

games_no = Game.all.length
users_no = User.all.length

libraries = []
User.all.each do |user|
  libraries += [{name: "Played", user_id: user.id},
    {name: "Wanting to Play", user_id: user.id},
    {name: "Currently Playing", user_id: user.id}]
end

Library.create!(libraries)

links = []

(1..games_no).each do |game_id|
  (1..users_no).each do |user_no|
    links << {game_id: game_id, library_id: user_no * 3 - rand(3)} if rand < 0.2
  end
end

LibraryLink.create!(links)


ips = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

review_bodies = ["This game is an ambitious offering, but it falls
  well short of the classics of the genre.  More polish and fewer
  features could have gone a long way towards creating an overall more
  fun experience.
    I hope that future efforts come together more, but I can't reccomend
  this game.",
  "This is likely the worst game that has ever been made.  Why was this
  created?  Why did I buy it?",
  "I love this game.  I play it at least 3 hours a day.",
  "Halp, I can't stop playing!  I haven't been to work in four days. I'm
  not sure I care any more.  Game is love, game is life.",
  "This game is great, except that the controls are super annoying!  If
  they just fixed that, it would be the best game ever.",
  "6.5 / 10, no comeback mechanics.", "I hear a lot of people hating on
  this game right now, but I think it's great.  Sure, the mechanics are
  a bit weird, but it's a super unique and original idea that was
  executed pretty well.  Stop expecting the Mona Lisa, people.  This
  is pretty good.",
  "This game is such a casual clown fiesta.  L2P a real game, n00bs.",
  "I love this game, but it's a shame that the multiplayer is full of
  13-year-olds that have held sexual congress with my mother.",
  "Fuck this fucking game.  Fuck.  I can't deal with it anymore.  It's
  too goddamn hard.  I'm done.  I'm so done.  I can't even right now."]


title_array = ["sweet game", "what a disappointment!", "Riot did it better",
"blizz, pls", "dlc needs work", "I can't believe I paid for this",
"0 stars", "10/10 would play again", "elbows pointy, would not play"]

reviews = []
User.all.each do |user|
  user_id = user.id
  user.libraries.first.games.each do |game|
    reviews << {user_id: user_id, game_id: game.id,
      body: review_bodies.sample, title: title_array.sample}
  end
end


Review.create!(reviews)
