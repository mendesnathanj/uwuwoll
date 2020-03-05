import * as ListsUtils from '../utils/lists_api_utils';


export const RECEIVE_LIST = 'RECEIVE_LIST';


const receiveList = payload => ({
  type: RECEIVE_LIST,
  payload
});

export const fetchList = () => dispatch => (
  ListsUtils.fetchList().then(payload => dispatch(receiveList(payload)))
);
