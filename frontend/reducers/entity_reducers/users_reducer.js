import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_ANIME } from '../../actions/anime_actions';

const usersReducer = (state = { }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.payload.users.id]: action.payload.users });
    case RECEIVE_ANIME:
      return Object.assign({}, state, action.payload.users);
    default:
      return state;
  }
}

export default usersReducer;
