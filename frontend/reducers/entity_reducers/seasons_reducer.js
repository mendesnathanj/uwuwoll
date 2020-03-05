import { RECEIVE_ALL_ANIME, RECEIVE_ANIME } from "../../actions/anime_actions";

const seasonsReducer = (state = { }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_ANIME:
      Object.values(action.payload.seasons).forEach(season => {
        if (!newState[season.id]) newState[season.id] = season;
      });

      return newState;

    case RECEIVE_ANIME:
      Object.values(action.payload.seasons).forEach(season => {
        newState[season.id] = season;
      });

      return newState;
    default:
      return state;
  }
};


export default seasonsReducer;
