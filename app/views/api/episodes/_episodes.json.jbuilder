episodes.each do |episode|
  json.set! episode.id do
    json.partial! 'api/episodes/episode', episode: episode
  end
end
