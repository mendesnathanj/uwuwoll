import { RECEIVE_LIST } from '../../actions/lists_actions';


const savedAnimeReducer = (state = { }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIST:
      if (!action.payload.savedAnime) return state;

      return action.payload.savedAnime;
    default:
      return state;
  }
};


export default savedAnimeReducer;
