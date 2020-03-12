import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findAnime, findEpisodesFromAnimeSlug, findSeasonsFromAnimeSlug } from '../../reducers/selectors';
import { fetchAnime } from '../../actions/anime_actions';
import { createSavedAnime, deleteSavedAnime } from '../../actions/saved_anime_actions';
import AnimePage from './anime_page';


const mstp = (state, ownProps) => ({
  anime: findAnime(state, ownProps.match.params.slug),
  seasons: findSeasonsFromAnimeSlug(state, ownProps.match.params.slug),
  episodes: findEpisodesFromAnimeSlug(state, ownProps.match.params.slug),
  savedAnime: Object.values(state.entities.savedAnime).map(anime => anime.animeId)
});

const mdtp = dispatch => ({
  fetchAnime: slug => dispatch(fetchAnime(slug)),
  createSavedAnime: id => dispatch(createSavedAnime(id)),
  deleteSavedAnime: id => dispatch(deleteSavedAnime(id))
});

export default withRouter(connect(mstp, mdtp)(AnimePage));
