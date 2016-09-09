require 'nokogiri'
require 'net/http'

names = %w(starcraft warcraft diablo league duty mario zelda
xcom civilization halo tetris minecraft theft scrolls battlefield
sims sonic fable clancy dota gears tomb persia final
kong goldeneye metroid)

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

del_list = [15, 16, 47, 50, 63, 107, 54, 90, 91, 68, 112, 113, 114, 182,
259, 206, 215, 217, 232, 235, 197, 268, 270, 272, 275, 352, 353, 371,
382, 377, 395, 396, 445, 448, 493, 507, 522, 523, 534, 562, 566, 569,
582, 587, 591, 592, 607, 652, 628, 673, 695, 699, 707, 711, 730, 734,
806, 250, 854, 880, 885, 859, 869, 871, 889, 737, 741, 759, 787, 808,
797, 804, 805, 809, 826, 834, 899, 900, 901, 166, 176, 233, 430, 497,
561, 632, 745, 769, 818, 855, 236, 265, 293, 676, 714, 907, 914, 919,
418, 619];

del_list.each do |num|
  g = Game.find_by_id(num)
  g.destroy
end

cover_hash = {8 => "https://upload.wikimedia.org/wikipedia/en/7/77/StarCraft_II_-_Legacy_of_the_Void_cover.jpg",
133 => "http://game2dl.net/308-thickbox_default/call-of-duty-ghosts-xbox-one.jpg",
134 => "http://vignette2.wikia.nocookie.net/callofduty/images/3/37/Call_of_Duty_Cover.jpg/revision/latest?cb=20120407220943",
140 => "https://assets.vg247.com/current//2016/06/call_of_duty_infinite_warfare_possible_new_art_1.jpg",
143 => "https://assets.vg247.com/current//2016/06/call_of_duty_infinite_warfare_possible_new_art_1.jpg",
147 => "https://assets.vg247.com/current//2016/06/call_of_duty_infinite_warfare_possible_new_art_1.jpg",
148 => "http://vignette2.wikia.nocookie.net/callofduty/images/d/db/Modern_Warfare_2_cover.PNG/revision/20090810181300",
157 => "http://firsthour.net/screenshots/call-of-duty-4-modern-warfare/call-of-duty-4-modern-warfare-cover.jpg",
160 => "http://i1097.photobucket.com/albums/g354/kevin3seven/BlackOps2cover.png",
178 => "https://upload.wikimedia.org/wikipedia/en/1/19/Call_of_Duty_World_at_War_cover.png",
204 => "http://ocremix.org/files/images/games/gb/5/super-mario-land-gb-cover-front-26011.jpg",
239 => "http://firsthour.net/screenshots/super-mario-galaxy-2/super-mario-galaxy-2-cover.jpg",
242 => "https://upload.wikimedia.org/wikipedia/en/a/a5/Super_Mario_Bros._3_coverart.png",
262 => "https://upload.wikimedia.org/wikipedia/en/5/5e/Super_Mario_3D_World_box_art.jpg",
266 => "https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png",
319 => "http://www.mobygames.com/images/covers/l/1-sid-meier-s-civilization-ii-windows-front-cover.jpg",
328 => "https://www.pixeldynamo.com/wp-content/uploads/2015/04/1100262092-00.jpg",
350 => "https://upload.wikimedia.org/wikipedia/en/8/8d/NES_Tetris_Box_Front.jpg",
366 => "http://static.giantbomb.com/uploads/original/9/93770/2362304-nes_tetris2_2.jpg",
400 => "http://screenshots.en.sftcdn.net/en/scrn/3333000/3333269/minecraft-pocket-edition-13-700x393.jpg",
413 => "http://img1.game-oldies.com/sites/default/files/packshots/nintendo-game-boy-advance/grand-theft-auto-advance-usa.png",
484 => "https://upload.wikimedia.org/wikipedia/en/2/29/Battlefield_Vietnam_Coverart.png",
560 => "https://upload.wikimedia.org/wikipedia/en/6/6c/Sonic_Spinball_Box.jpeg",
605 => "http://www.mobygames.com/images/covers/l/119133-sonic-the-hedgehog-3-genesis-front-cover.jpg",
28 => "https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png",
856 => "https://i.ytimg.com/vi/5_LSByp8IWI/maxresdefault.jpg",
843 => "http://vgboxart.com/boxes/CD-I/46372-donkey-kong.png",
775 => "http://files.bloodedbythought.org/cgp/main.php?g2_view=core.DownloadItem&g2_itemId=142&g2_serialNumber=2",
772 => "http://s.emuparadise.org/GBA/boxart/2564.jpg",
791 => "http://ocremix.org/files/images/games/ps2/5/final-fantasy-xii-ps2-cover-front-50464.jpg",
679 => "http://1.bp.blogspot.com/-ka6Rd27Zc3Y/VXjUaktfFhI/AAAAAAAADCc/bhLBum5IKcM/s1600/Tomb-Raider-Underworld-Download-Game-Cover.jpg",
668 => "https://upload.wikimedia.org/wikipedia/en/6/69/Tomb_Raider_(1996).png",
638 => "https://upload.wikimedia.org/wikipedia/en/5/5b/Fablebox.jpg",
637 => "https://upload.wikimedia.org/wikipedia/en/5/5b/Fablebox.jpg",
641 => "http://firsthour.net/screenshots/fable-2/fable-2-cover.jpg",
913 => "http://vgboxart.com/boxes/SNES/35116-super-metroid.png",
916 => "http://vignette3.wikia.nocookie.net/metroid/images/7/7a/ZM_guide_cover.JPG/revision/latest?cb=20140531013249",
642 => "http://officialrtv.com/wp-content/uploads/2014/02/Cover001.png",
}

cover_hash.keys.each do |key|
  Game.find_by_id(key).update(cover: cover_hash[key])
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
  {username: "SatoshiTajiri", email: "pokemonmaster@gamefreak.com", password: "catchemall"},
  {username: "Bjergsen", email: "a", password: "password"},
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
  {username: "Sargeth", email: "a", password: "password"},
  {username: "Khazrandir", email: "a", password: "password"},
  {username: "Eldfinnr", email: "a", password: "password"},
  {username: "Xzeel", email: "a", password: "password"},
  {username: "1ch1g0", email: "a", password: "password"},
  {username: "KingRadical", email: "a", password: "password"},
  {username: "Impotence", email: "a", password: "password"},
  {username: "TyrionTargaryen", email: "a", password: "password"},
  {username: "Mithrandir", email: "a", password: "password"},
  {username: "Xandalf", email: "a", password: "password"},
  {username: "DildoBaggins", email: "a", password: "password"},
  {username: "YoloSwaggins", email: "a", password: "password"},
  {username: "KvotheTheRaven", email: "a", password: "password"},
  {username: "PMmeYourGOTY", email: "a", password: "password"},
  {username: "PlatScrub", email: "a", password: "password"},
  {username: "RoyGreenhilt", email: "a", password: "password"},
  {username: "ToxicTerror", email: "a", password: "password"},
  {username: "4mana77", email: "a", password: "password"},
  {username: "SpikeSpiegel", email: "a", password: "password"},
  {username: "WellMet", email: "a", password: "password"},
  {username: "Dizzident", email: "a", password: "password"},
  {username: "Naruto2211", email: "a", password: "password"},
  {username: "Kira", email: "a", password: "password"},
  {username: "RubberManLuffy", email: "a", password: "password"},
  {username: "Psyclops", email: "a", password: "password"},
  {username: "TidusLaugh", email: "a", password: "password"},
  {username: "FusRoDah", email: "a", password: "password"},
  {username: "TaroTanaka", email: "a", password: "password"},
  {username: "IN-FER-NO", email: "a", password: "password"},
  {username: "ZugZug", email: "a", password: "password"},
  {username: "Blackhand", email: "a", password: "password"},
  {username: "TyraelsMight", email: "a", password: "password"},
  {username: "1mp3r1us", email: "a", password: "password"},
  {username: "RyuWagaTekiWoFuckYou", email: "a", password: "password"},
  {username: "Morrigan", email: "a", password: "password"},
  {username: "Revan", email: "a", password: "password"},
  {username: "DialecticDestroyer", email: "a", password: "password"},
  {username: "SexyElf", email: "a", password: "password"},
  {username: "NoobCrusher", email: "a", password: "password"}])

games = Game.all
games_no = games.length
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

(1..3).each do |l|
  games.sample(8).each { |g| links << {game_id: g.id, library_id: l} }
end

n = Library.find_by({user_id: 1, name: "Totally Sweet Games"}).id

(0..4).each do |m|
  games.sample(12).each { |g| links << {game_id: g.id, library_id: n + m} }
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
  "I haven't had this much fun in years.  I r8 it 8/8, m8.",
  "I'm too high for this website.  How do I get back to the search bar?",
  "why in the world r u usig san serif it looks terrible.  comic sans, pls",
  "Uninspired trash, retreading the same ground as countless better games.
  This piece of formulaic garbage fits in all too well in today's oversaturated
  market.  Cannot recommend to anyone.", "This is one of the best games
  I've played this year.  Everyone should check it out.  For real.",
  "This is a solid game.  I'm not completely satisfied, but it was worth
  what I paid for it.  I'd recommend it to anyone who is a fan of the
  genre, but general audiences may want to pass.", "What even is this game?
  It's just so bad.  0/10.",
  "I always love these kind of games and this one is no exception!",
  "Meh, get it when it's on the summer sale, otherwise, pass.",
  "I hate this game.  I hate it so much.  I hate you for reading about
  it.", "This game has a steep learning curve, but it's so worth it.
  Stick through the beginning, and you'll thank me.  Would recommend.",
  "this gme is to hard.  they shud make it ezier, cuz now its just
  dumb.", "5/7.  Perfect."]


title_array = ["sweet game", "what a disappointment!", "Riot did it better",
"blizz, pls", "dlc needs work", "I can't believe I paid for this",
"0 stars", "10/10 would play again", "elbows pointy, would not play",
"Too Casual", "Community is full of tryhards", "Meh", "P2W garbage",
"Worth the money", "amazing", "dank", "awful", "Rito, pls", "great community!"]

reviews = []
User.all.each do |user|
  games.sample(50).each { |g| reviews << {user_id: user.id, game_id: g.id, body: review_bodies.sample, title: title_array.sample} }
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
    ratings << {user_id: user.id, game_id: game.id, num: rounder(rand())} if rand() < 0.1
  end
end

Rating.create(ratings)
