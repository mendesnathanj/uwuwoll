json.extract! season, :id, :title, :season_num, :anime_id
json.episode_ids season.episode_ids.reverse
