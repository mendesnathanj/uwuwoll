import { RECEIVE_EPISODE } from '../../actions/episode_actions';
import { RECEIVE_ALL_ANIME, RECEIVE_ANIME } from '../../actions/anime_actions';
import { RECEIVE_NAVBAR_ITEMS } from "../../actions/navbar_actions";

const episodeSlugsReducer = (state = { }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_EPISODE:
      return Object.assign({}, state, action.payload.slugs.episodes);
    case RECEIVE_ALL_ANIME:
      return Object.assign({}, state, action.payload.slugs.episodes);
    case RECEIVE_ANIME:
      return Object.assign({}, state, action.payload.slugs.episodes);
    case RECEIVE_NAVBAR_ITEMS:
      return Object.assign({}, state, action.payload.slugs.episodes);

    default:
      return state;
  }
};


export default episodeSlugsReducer;
