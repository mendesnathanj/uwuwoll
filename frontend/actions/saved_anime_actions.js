import * as SavedAnimeUtils from '../utils/saved_anime_api_utils';


export const RECEIVE_SAVED_ANIME = 'RECEIVE_SAVED_ANIME';
export const RECEIVE_DELETED_ANIME = 'RECEIVE_DELETED_ANIME';


const receiveSavedAnime = payload => ({
  type: RECEIVE_SAVED_ANIME,
  payload
});

const receiveDeletedAnime = payload => ({
  type: RECEIVE_DELETED_ANIME,
  payload
});


export const createSavedAnime = id => dispatch => (
  SavedAnimeUtils.createSavedAnime(id).then(saved_anime => dispatch(receiveSavedAnime(saved_anime)))
);

export const deleteSavedAnime = id => dispatch => (
  SavedAnimeUtils.deleteSavedAnime(id).then(saved_anime => dispatch(receiveDeletedAnime(saved_anime)))
);
