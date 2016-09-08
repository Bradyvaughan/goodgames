# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



require 'nokogiri'
require 'net/http'

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
              cover: cover})
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
{username: "TitsOrGTFO", email: "a", password: "password"},
{username: "/b/tard", email: "a", password: "password"},
{username: "GetOutOfMySwamp", email: "a", password: "password"},
{username: "AIDS", email: "a", password: "password"},
{username: "CantMeltDankMemes", email: "a", password: "password"},
{username: "JohnSmith112", email: "a", password: "password"},
{username: "CurvyBoom", email: "a", password: "password"},
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
{username: "OgrimsHammer", email: "a", password: "password"},
{username: "Brony", email: "a", password: "password"},
{username: "RainbowHash", email: "a", password: "password"},
{username: "40cakes", email: "a", password: "password"},
{username: "ThisIsJimmy", email: "a", password: "password"},
{username: "Swagnaros", email: "a", password: "password"},
{username: "TrumpsHairpiece", email: "a", password: "password"},
{username: "sTRUMPet", email: "a", password: "password"},
{username: "ArrowToTheKnee", email: "a", password: "password"},
{username: "RarestPepe", email: "a", password: "password"},
{username: "BackSoreTeamTooHeavy", email: "a", password: "password"},
{username: "MidOrFeed", email: "a", password: "password"},
{username: "NerfTracer", email: "a", password: "password"},
{username: "WOLOLOLOLOLO", email: "a", password: "password"},
{username: "NuclearGandhi", email: "a", password: "password"},
{username: "6Pool", email: "a", password: "password"},
{username: "MLGeVe", email: "a", password: "password"},
{username: "AssassinsWeed", email: "a", password: "password"},
{username: "420Blazeit", email: "a", password: "password"},
{username: "ShyGuyToFlyGuy", email: "a", password: "password"},
{username: "Impotence", email: "a", password: "password"},
{username: "SexyElf", email: "a", password: "password"},
{username: "NoobCrusher", email: "a", password: "password"}])

games_no = Game.all.length
users_no = User.all.length

libraries = []
User.all.each do |user|
  libraries += [{name: "Played", user_id: user.id},
    {name: "To Play", user_id: user.id},
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
  too goddamn hard.  I'm done.  I'm so done.  I can't even right now.",
  "Calling this game a kiddy-game for casual scrubs is simplistic, maybe,
  but undeniably accurate.  I cannot believe how soft this entire
  industry has gotten.  I remember when even having lives was a luxury.
  Now, games are virtually impossible to lose.  There is no skill
  involved at all when the game may be retried indefinitely.  Anyone
  who has played the original x-com, or, hell, even the original classics
  such as mario or megaman knows how rewarding a brutally difficult
  experience can be.  It saddens me that the triple-A gaming industry
  keeps vomitting out shitty, unlosable care-bear games to cater to
  casual cowards.  You all make me sick.",
  "Not even one solid waifu.  Awful.",
  "Oh my god, guys.  I'm so goddamn tired of your memes.  Can you guys
  just fucking stop already?  Jesus, I haven't read an original thought
  since I've been on this site!"]


title_array = ["sweet game", "what a disappointment!", "Riot did it better",
"blizz, pls", "dlc needs work", "I can't believe I paid for this",
"0 stars", "10/10 would play again", "elbows pointy, would not play",
"Too Casual", "Community is full of tryhards", "Meh", "P2W garbage"]

reviews = []
User.all.each do |user|
  user_id = user.id
  user.libraries.first.games.each do |game|
    reviews << {user_id: user_id, game_id: game.id,
      body: review_bodies.sample, title: title_array.sample}
  end
end


Review.create!(reviews)

ratings = []

def rounder(num)
  if num < 0.2
    1
  elsif num < 0.3
    2
  elsif num < 0.45
    3
  elsif num < 0.75
    4
  else
    5
  end
end

User.all.each do |user|
  user_id = user.id
  Game.all.each do |game|
    ratings << {user_id: user_id, game_id: game.id, num: rounder(rand())} if rand() < 0.2
  end
end

Rating.create(ratings)

Library.create([{name: "Totally Sweet Games", user_id: 1},
  {name: "Recommended By Friends", user_id: 1},
  {name: "Mindless Fun", user_id: 1},
  {name: "Watchlist", user_id: 1},
  {name: "Obnoxious Games", user_id: 1},
  ])

  n = Library.find_by({user_id: 1, name: "Totally Sweet Games"}).id
  LibraryLinks.create([
    {game_id: Game.find_by({title: "Starcraft"}).id, library_id: n},
    {game_id: Game.find_by({title: "Starcraft II: Wings of Liberty"}).id, library_id: n},
    {game_id: Game.find_by({title: "Starcraft: Brood War"}).id, library_id: n},
    {game_id: Game.find_by({title: "Rocket League"}).id, library_id: n},
    {game_id: Game.find_by({title: "Super Mario 64"}).id, library_id: n},
    {game_id: Game.find_by({title: "Super Mario World"}).id, library_id: n},
    {game_id: Game.find_by({title: "The Legend of Zelda: Ocarina of Time"}).id, library_id: n},
    {game_id: Game.find_by({title: "XCOM: Enemy Unknown"}).id, library_id: n},
    {game_id: Game.find_by({title: "XCOM: Enemy Within"}).id, library_id: n},
    {game_id: Game.find_by({title: "Sid Meier's Civilization II"}).id, library_id: n},
    {game_id: Game.find_by({title: "Sid Meier's Civilization II"}).id, library_id: n},
    {game_id: Game.find_by({title: "Sid Meier's Civilization V: Gold Edition"}).id, library_id: n},
    {game_id: Game.find_by({title: "Sid Meier's Civilization IV: the Complete Edition"}).id, library_id: n},
    {game_id: Game.find_by({title: "Grand Theft Auto: Vice City"}).id, library_id: n},
    {game_id: Game.find_by({title: "The Elder Scrolls IV: Oblivion"}).id, library_id: n},
    {game_id: Game.find_by({title: "The Elder Scrolls II: Morrowind"}).id, library_id: n},
    {game_id: Game.find_by({title: "The Elder Scrolls V: Skyrim"}).id, library_id: n},
    {game_id: Game.find_by({title: "Sonic the Hedgehog 2"}).id, library_id: n},
    {game_id: Game.find_by({title: "Fable"}).id, library_id: n},
    {game_id: Game.find_by({title: "Prince of Persia: The Sands of Time"}).id, library_id: n},
    {game_id: Game.find_by({title: "Final Fantasy VII"}).id, library_id: n},
    {game_id: Game.find_by({title: "Final Fantasy X"}).id, library_id: n},
    {game_id: Game.find_by({title: "Donkey Kong Country"}).id, library_id: n},
    {game_id: Game.find_by({title: "World of Warcraft"}).id, library_id: n},
    {game_id: Game.find_by({title: "The Legend fo Zelda: Majora's Mask"}).id, library_id: n},
    {game_id: Game.find_by({title: "XCOM 2"}).id, library_id: n},
    {game_id: Game.find_by({title: "Halo: Combat Evolved"}).id, library_id: n},
    {game_id: Game.find_by({title: "Tetris"}).id, library_id: n},
    {game_id: Game.find_by({title: "Minecraft"}).id, library_id: n},
    {game_id: Game.find_by({title: "Battlefield 3"}).id, library_id: n},
    {game_id: Game.find_by({title: "Gears of War"}).id, library_id: n}
    ])

    links = []
    [1..4].each do |m|
      30.times { |_| links << {library_id: n + m, game_id: rand(games_no)}}
    end

    LibraryLink.create(links)
