import { connect } from "react-redux";
import Queue from './queue';
import { findCurrentUser, findSavedAnime } from "../../reducers/selectors";
import { fetchList } from '../../actions/lists_actions';


const mstp = state => ({
  currentUser: findCurrentUser(state),
  savedAnime: findSavedAnime(state),
  episodes: state.entities.episodes
});

const mdtp = dispatch => ({
  fetchList: () => dispatch(fetchList())
});


export default connect(mstp, mdtp)(Queue);
