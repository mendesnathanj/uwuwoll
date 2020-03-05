import { connect } from 'react-redux';
import AnimeIndex from './anime_index';
import { fetchAllAnime } from '../../actions/anime_actions';


const mstp = state => ({
  anime: Object.values(state.entities.anime),
  seasons: Object.values(state.entities.seasons),
  episodes: Object.values(state.entities.episodes)
});

const mdtp = dispatch => ({
  fetchAllAnime: () => dispatch(fetchAllAnime())
});


export default connect(mstp, mdtp)(AnimeIndex);
