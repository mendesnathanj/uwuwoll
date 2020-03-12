import * as NavbarUtils from '../utils/navbar_api_utils';


export const RECEIVE_NAVBAR_ITEMS = 'RECEIVE_NAVBAR_ITEMS';


const receiveNavbarItems = payload => ({
  type: RECEIVE_NAVBAR_ITEMS,
  payload
});


export const fetchNavbarInfo = () => dispatch => (
  NavbarUtils.fetchNavbarInfo().then(payload => dispatch(receiveNavbarItems(payload)))
);
