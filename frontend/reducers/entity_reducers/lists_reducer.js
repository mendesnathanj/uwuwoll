import { RECEIVE_LIST } from "../../actions/lists_actions";
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_ANIME, RECEIVE_ALL_ANIME } from '../../actions/anime_actions';
import { RECEIVE_SAVED_ANIME, RECEIVE_DELETED_ANIME } from "../../actions/saved_anime_actions";


const listsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIST:
      return action.payload.lists;
    case RECEIVE_CURRENT_USER:
      return action.payload.lists;
    case RECEIVE_SAVED_ANIME:
      return action.payload.lists;
    case RECEIVE_DELETED_ANIME:
      return action.payload.lists;
    case RECEIVE_ANIME:
      return action.payload.lists;
    case RECEIVE_ALL_ANIME:
      return action.payload.lists;

    default:
      return state;
  }
};


export default listsReducer;
