import * as AnimeUtils from '../utils/anime_api_utils';


export const RECEIVE_ALL_ANIME = 'RECEIVE_ALL_ANIME';
export const RECEIVE_ANIME = 'RECEIVE_ANIME';


const receiveAllAnime = payload => ({
  type: RECEIVE_ALL_ANIME,
  payload
});

const receiveAnime = payload => ({
  type: RECEIVE_ANIME,
  payload
});


export const fetchAllAnime = () => dispatch => (
  AnimeUtils.fetchAllAnime().then(payload => dispatch(receiveAllAnime(payload)))
);

export const fetchAnime = animeId => dispatch => (
  AnimeUtils.fetchAnime(animeId).then(payload => dispatch(receiveAnime(payload)))
);
