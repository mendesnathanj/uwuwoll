import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchAllAnime } from '../../actions/anime_actions';
import { createSavedAnime, deleteSavedAnime } from '../../actions/saved_anime_actions';
import AnimeIndexItem from './anime_index_item';

const AnimeIndex = () => {
  const dispatch = useDispatch();

  const anime = useSelector(state => Object.values(state.entities.anime));

  const savedAnime = new Set(useSelector(state => (
    Object.values(state.entities.savedAnime).map(saved => saved.animeId))
  ));

  useEffect(() => {
    dispatch(fetchAllAnime());
  }, []);

  const animeItems = anime.map(anime => (
    <AnimeIndexItem
      createSavedAnime={createSavedAnime}
      deleteSavedAnime={deleteSavedAnime}
      key={anime.id}
      anime={anime}
      saved={savedAnime.has(Number(anime.id))}
    />
  ));

  return (
    <div className="anime-container">
      <div className="header-container">
        <h1 className="anime-header">Anime</h1>
      </div>
      <ul className="anime-container">{ animeItems }</ul>
    </div>
  )
}


export default AnimeIndex;
