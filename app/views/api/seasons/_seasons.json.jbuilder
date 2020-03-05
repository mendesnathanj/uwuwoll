seasons.each do |season|
  json.set! season.id do
    json.partial! 'api/seasons/season', season: season
  end
end
