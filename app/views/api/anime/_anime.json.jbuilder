json.extract! anime, :id, :title, :description, :publisher
json.season_ids anime.season_ids.reverse
json.episode_ids anime.episode_ids.reverse
json.episode_count anime.episodes.length
