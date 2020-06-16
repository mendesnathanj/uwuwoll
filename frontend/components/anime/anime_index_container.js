import { connect } from 'react-redux';
import AnimeIndex from './anime_index2';
import { fetchAllAnime } from '../../actions/anime_actions';
import { createSavedAnime, deleteSavedAnime } from '../../actions/saved_anime_actions';


const mstp = state => ({
  anime: Object.values(state.entities.anime),
  seasons: Object.values(state.entities.seasons),
  episodes: Object.values(state.entities.episodes),
  savedAnime: Object.values(state.entities.savedAnime).map(anime => anime.animeId)
});

const mdtp = dispatch => ({
  fetchAllAnime: () => dispatch(fetchAllAnime()),
  createSavedAnime: id => dispatch(createSavedAnime(id)),
  deleteSavedAnime: id => dispatch(deleteSavedAnime(id))
});


export default connect(mstp, mdtp)(AnimeIndex);
