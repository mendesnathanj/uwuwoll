import { RECEIVE_EPISODE } from '../../actions/episode_actions';
import { RECEIVE_ALL_ANIME, RECEIVE_ANIME } from '../../actions/anime_actions';


const animeSlugsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_EPISODE:
      return Object.assign({}, state, action.payload.slugs.anime);

    case RECEIVE_ALL_ANIME:
      return Object.assign({}, state, action.payload.slugs.anime);

    case RECEIVE_ANIME:
      return Object.assign({}, state, action.payload.slugs.anime);

    default:
      return state;
  }
};


export default animeSlugsReducer;
