import { RECEIVE_ANIME } from '../../actions/anime_actions';


export default function(state = {}, action) {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ANIME:
      return Object.assign({}, state, action.payload.comments);
    default:
      return state;
  }
}
