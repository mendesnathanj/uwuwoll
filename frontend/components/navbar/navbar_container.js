import { connect } from 'react-redux';
import { findCurrentUser } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { fetchNavbarInfo } from '../../actions/navbar_actions';
import Navbar from './navbar';


const mstp = state => ({
  currentUser: findCurrentUser(state),
  anime: Object.values(state.entities.anime),
  episodes: Object.values(state.entities.episodes),
  seasons: state.entities.seasons
});

const mdtp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchNavbarInfo: () => dispatch(fetchNavbarInfo())
});

export default withRouter(connect(mstp, mdtp)(Navbar));
