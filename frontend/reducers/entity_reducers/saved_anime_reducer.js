import { RECEIVE_LIST } from '../../actions/lists_actions';
import { RECEIVE_ANIME, RECEIVE_ALL_ANIME } from "../../actions/anime_actions";
import { RECEIVE_SAVED_ANIME, RECEIVE_DELETED_ANIME } from "../../actions/saved_anime_actions";


const savedAnimeReducer = (state = { }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIST:
      if (!action.payload.savedAnime) return state;
      return action.payload.savedAnime;

    case RECEIVE_ALL_ANIME:
      if (!action.payload.savedAnime) return state;
      return action.payload.savedAnime;

    case RECEIVE_ANIME:
      if (!action.payload.savedAnime) return state;
      return action.payload.savedAnime;

    case RECEIVE_SAVED_ANIME:
      return Object.assign({}, state, action.payload.savedAnime);

    case RECEIVE_DELETED_ANIME:
      let newState = Object.assign({}, state);
      delete newState[Object.values(action.payload.savedAnime)[0].id];

      return newState;
    default:
      return state;
  }
};


export default savedAnimeReducer;
