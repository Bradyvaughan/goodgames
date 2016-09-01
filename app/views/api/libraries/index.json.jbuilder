@libraries.each do |library|
  json.set! library.id do
    json.partial! 'library', library: library
  end
end
