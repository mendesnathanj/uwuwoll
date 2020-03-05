import { RECEIVE_LIST } from "../../actions/lists_actions";

const listsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIST:
      return action.payload.lists;
    default:
      return state;
  }
};


export default listsReducer;
