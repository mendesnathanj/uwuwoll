import { connect } from 'react-redux';
import { findCurrentUser } from '../../reducers/selectors';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mstp = state => ({
  currentUser: findCurrentUser(state)
});

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(mstp, mdtp)(Navbar));
