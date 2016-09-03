json.extract! library, :name
json.set! :games do
  library.library_links.each do |link|
    json.set! link.game.id do
      json.link_id link.id
      json.partial! '/api/games/game', game: link.game
    end
  end
end
