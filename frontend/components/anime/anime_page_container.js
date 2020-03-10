import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findAnime, findEpisodesFromAnimeSlug, findSeasonsFromAnimeSlug } from '../../reducers/selectors';
import { fetchAnime } from '../../actions/anime_actions';
import AnimePage from './anime_page';


const mstp = (state, ownProps) => {
  return {
    anime: findAnime(state, ownProps.match.params.slug),
    seasons: findSeasonsFromAnimeSlug(state, ownProps.match.params.slug),
    episodes: findEpisodesFromAnimeSlug(state, ownProps.match.params.slug)
  }
};

const mdtp = dispatch => ({
  fetchAnime: slug => dispatch(fetchAnime(slug))
});

export default withRouter(connect(mstp, mdtp)(AnimePage));
