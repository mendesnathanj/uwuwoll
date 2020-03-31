import { RECEIVE_ANIME } from '../../actions/anime_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comment_actions';


export default function(state = {}, action) {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ANIME:
      return Object.assign({}, state, action.payload.comments);
    case RECEIVE_COMMENT:
      return Object.assign({}, state, action.comment);
    default:
      return state;
  }
}
