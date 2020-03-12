import { RECEIVE_ALL_ANIME, RECEIVE_ANIME } from '../../actions/anime_actions';
import { RECEIVE_LIST } from '../../actions/lists_actions';
import { RECEIVE_EPISODE } from '../../actions/episode_actions';
import { RECEIVE_NAVBAR_ITEMS } from '../../actions/navbar_actions';

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

    case RECEIVE_NAVBAR_ITEMS:
      let anime = Object.values(action.payload.anime).filter(anime => !newState[anime.id]);
      anime.forEach(anime => newState[anime.id] = anime);

      return newState;
    default:
      return state;
  }
}

export default animeReducer;
