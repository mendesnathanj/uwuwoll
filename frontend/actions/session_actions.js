import * as SessUtils from '../utils/session_api_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
  user: {}
})

const receiveErrors = errors => ({
  type: RECEIVE_LOGIN_ERRORS,
  errors
})

export const login = user => dispatch => (
  SessUtils.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          errs => dispatch(receiveErrors(errs.responseJSON)))
);

export const logout = () => dispatch => (
  SessUtils.logout()
    .then(() => dispatch(logoutCurrentUser()),
          errs => dispatch(receiveErrors(errs.responseJSON)))
);

export const signup = user => dispatch => (
  SessUtils.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          errs => dispatch(receiveErrors(errs.responseJSON)))
);
