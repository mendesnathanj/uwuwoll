import { combineReducers } from 'redux';
import usersReducer from './entity_reducers/users_reducer';
import animeReducer from "./entity_reducers/anime_reducer";
import seasonsReducer from "./entity_reducers/seasons_reducer";
import episodesReducer from "./entity_reducers/episodes_reducer";
import savedAnimeReducer from './entity_reducers/saved_anime_reducer';
import listsReducer from './entity_reducers/lists_reducer';
import comments from './entity_reducers/comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  anime: animeReducer,
  seasons: seasonsReducer,
  episodes: episodesReducer,
  comments,
  savedAnime: savedAnimeReducer,
  lists: listsReducer,
});

export default entitiesReducer;
