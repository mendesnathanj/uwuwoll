import { RECEIVE_ALL_ANIME, RECEIVE_ANIME } from '../../actions/anime_actions';
import { RECEIVE_LIST } from '../../actions/lists_actions';

const animeReducer = (state = { }, action) => {
  Object.freeze(state);
  let newState = Object.assign({ }, state);

  switch (action.type) {
    case RECEIVE_ALL_ANIME:
      Object.values(action.payload.anime).forEach(anime => {
        if (!newState[anime.id]) newState[anime.id] = anime;
      });

      return newState;

    case RECEIVE_ANIME:
      newState[action.payload.anime.id] = action.payload.anime;
      return newState;

    case RECEIVE_LIST:
      if (!action.payload.anime) return state;

      return Object.assign(newState, action.payload.anime);

    default:
      return state;
  }
}

export default animeReducer;
