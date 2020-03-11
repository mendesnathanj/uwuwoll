import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EpisodePage from './episode_page';
import { findAnime, findEpisode, findEpisodesFromAnimeSlug } from '../../reducers/selectors';
import { fetchAnime } from '../../actions/anime_actions';


const mstp = (state, ownProps) => {
  return {
    episode: findEpisode(state, ownProps.match.params.episodeSlug),
    anime: findAnime(state, ownProps.match.params.animeSlug),
    episodes: findEpisodesFromAnimeSlug(state, ownProps.match.params.animeSlug)
  }
};


const mdtp = dispatch => ({
  fetchAnime: slug => dispatch(fetchAnime(slug))
});


export default withRouter(connect(mstp, mdtp)(EpisodePage));
