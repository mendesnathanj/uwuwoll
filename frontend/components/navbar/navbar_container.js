import { connect } from 'react-redux';
import { findCurrentUser, findRandomAnime } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar';


const mstp = state => ({
  currentUser: findCurrentUser(state),
  anime: Object.values(state.entities.anime),
  randomAnime: () => findRandomAnime(state)
});

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(mstp, mdtp)(Navbar));
