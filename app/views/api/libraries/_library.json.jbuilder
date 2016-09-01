json.extract! library, :name, :description
json.set! :games do
  library.games.each do |game|
    json.partial! '/api/games/game', game: game
  end
end
