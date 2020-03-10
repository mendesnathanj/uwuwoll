import { RECEIVE_ALL_ANIME, RECEIVE_ANIME } from '../../actions/anime_actions';
import { RECEIVE_LIST } from '../../actions/lists_actions';
import { RECEIVE_EPISODE } from '../../actions/episode_actions';

const animeReducer = (state = { }, action) => {
  Object.freeze(state);
  let newState = Object.assign({ }, state);

  switch (action.type) {
    case RECEIVE_ALL_ANIME:
      return Object.assign({}, state, action.payload.anime);

    case RECEIVE_ANIME:
      return Object.assign({}, state, { [action.payload.anime.id]: action.payload.anime });

    case RECEIVE_LIST:
      if (!action.payload.anime) return state;

      return Object.assign(newState, action.payload.anime);

    case RECEIVE_EPISODE:
      return Object.assign(newState, action.payload.anime);

    default:
      return state;
  }
}

export default animeReducer;
