import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findAnime, findEpisodesFromAnimeId, findSeasonsFromAnimeId } from '../../reducers/selectors';
import { fetchAnime } from '../../actions/anime_actions';
import AnimePage from './anime_page';


const mstp = (state, ownProps) => {
  return {
    anime: findAnime(state, ownProps.match.params.animeId),
    seasons: findSeasonsFromAnimeId(state, ownProps.match.params.animeId),
    episodes: findEpisodesFromAnimeId(state, ownProps.match.params.animeId)
  }
};

const mdtp = dispatch => ({
  fetchAnime: animeId => dispatch(fetchAnime(animeId))
});

export default withRouter(connect(mstp, mdtp)(AnimePage));
