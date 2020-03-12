import { RECEIVE_ALL_ANIME, RECEIVE_ANIME } from "../../actions/anime_actions";
import { RECEIVE_NAVBAR_ITEMS } from "../../actions/navbar_actions";

const seasonsReducer = (state = { }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    // case RECEIVE_ALL_ANIME:
    //   return Object.assign({}, state, action.payload.seasons);
    case RECEIVE_ANIME:
      if (!action.payload.seasons) return state;

      return Object.assign({}, state, action.payload.seasons);

    case RECEIVE_NAVBAR_ITEMS:
      return Object.assign({}, state, action.payload.seasons);

    default:
      return state;
  }
};


export default seasonsReducer;
