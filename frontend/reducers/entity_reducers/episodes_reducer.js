import { RECEIVE_ALL_ANIME, RECEIVE_ANIME } from "../../actions/anime_actions";
import { RECEIVE_LIST } from '../../actions/lists_actions';
import { RECEIVE_EPISODE } from "../../actions/episode_actions";
import { RECEIVE_NAVBAR_ITEMS } from "../../actions/navbar_actions";

const episodesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_ANIME:
      Object.values(action.payload.episodes).forEach(episode => {
        if (!newState[episode.id]) newState[episode.id] = episode;
      });

      return newState;

    case RECEIVE_ANIME:
      Object.values(action.payload.episodes).forEach(episode => {
        newState[episode.id] = episode;
      });

      return newState;

    case RECEIVE_LIST:
      if (!action.payload.episodes) return state;

      return Object.assign(newState, action.payload.episodes);

    case RECEIVE_EPISODE:
      return Object.assign(newState, action.payload.episodes);

    case RECEIVE_NAVBAR_ITEMS:
      let episodes = Object.values(action.payload.episodes).filter(episode => !newState[episode.id]);
      episodes.forEach(episode => (newState[episode.id] = episode));

      return newState;
    default:
      return state;
  }
};

export default episodesReducer;
