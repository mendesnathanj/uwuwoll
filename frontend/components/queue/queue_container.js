import { connect } from "react-redux";
import Queue from './queue';
import { findCurrentUser, findSavedAnime, findSavedEpisodes } from "../../reducers/selectors";
import { fetchList } from '../../actions/lists_actions';
import { deleteSavedAnime } from '../../actions/saved_anime_actions';


const mstp = state => ({
  currentUser: findCurrentUser(state),
  savedAnime: findSavedAnime(state),
  episodes: findSavedEpisodes(state)
});

const mdtp = dispatch => ({
  fetchList: () => dispatch(fetchList()),
  deleteSavedAnime: id => dispatch(deleteSavedAnime(id))
});


export default connect(mstp, mdtp)(Queue);
