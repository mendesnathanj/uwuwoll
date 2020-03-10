import { combineReducers } from "redux";
import animeSlugsReducer from './slugs_reducers/anime_slugs_reducer';
import episodeSlugsReducer from './slugs_reducers/episode_slugs_reducer';


const slugsReducer = combineReducers({
  anime: animeSlugsReducer,
  episodes: episodeSlugsReducer
})


export default slugsReducer;
