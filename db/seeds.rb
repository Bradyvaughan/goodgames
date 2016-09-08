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
{username: "/b/tard", email: "a", password: "password"},
{username: "GetOutOfMySwamp", email: "a", password: "password"},
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
{username: "Heteroskedasticity6969", email: "a", password: "password"},
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

Library.create([{name: "Totally Sweet Games", user_id: 1},
  {name: "Recommended By Friends", user_id: 1},
  {name: "Mindless Fun", user_id: 1},
  {name: "Watchlist", user_id: 1},
  {name: "Obnoxious Games", user_id: 1}
  ])

links = []

(1..3).each do |lib|
  8.times { |_| links << {game_id: 1 + rand(games_no), library_id: lib} }
end

n = Library.find_by({user_id: 1, name: "Totally Sweet Games"}).id

(0..4).each do |m|
  12.times { |_| links << {library_id: n + m, game_id: 1 + rand(games_no)} }
end

LibraryLink.create(links)

review_bodies = ["This game is an ambitious offering, but it falls
  well short of the classics of the genre.  More polish and fewer
  features could have gone a long way towards creating an overall more
  fun experience.
    I hope that future efforts come together more, but I can't recommend
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
  since I've been on this site!",
  "Everyone shitting on this game in the comments section is just a
  no-life fanboy.  Get the fuck out.",
  "I haven't had this much fun in years.  I rate it 8/8 m8.",
  "I'm too high for this website.  How do I get back to the search bar?",
  "why in the world r u usig san serif it looks terrible.  comic sans, pls",
  "Uninspired garbage, retreading the same ground as countless better games.
  This piece of formulaic garbage fits in all too well in today's oversaturated
  market.  Cannot recommend to anyone.", "This is one of the best games
  I've played this year.  Everyone should check it out.  For real.",
  "This is a solid game.  I'm not completely satisfied, but it was worth
  what I paid for it.  I'd recommend it to anyone who is a fan of the
  genre, but general audiences may want to pass.", "What even is this game?
  It's just so bad.  0/10." ]


title_array = ["sweet game", "what a disappointment!", "Riot did it better",
"blizz, pls", "dlc needs work", "I can't believe I paid for this",
"0 stars", "10/10 would play again", "elbows pointy, would not play",
"Too Casual", "Community is full of tryhards", "Meh", "P2W garbage",
"Worth the money", "amazing", "dank", "awful", "Rito, pls", "great community!"]

reviews = []
User.all.each do |user|
  100.times { reviews << {user_id: user.id, game_id: rand(games_no), body: review_bodies.sample, title: title_array.sample} }
end


Review.create(reviews)

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
  Game.all.each do |game|
    ratings << {user_id: user.id, game_id: game.id, num: rounder(rand())} if rand() < 0.2
  end
end

Rating.create(ratings)
