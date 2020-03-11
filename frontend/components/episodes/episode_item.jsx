import React from 'react';
import { Link } from 'react-router-dom';


const EpisodeItem = ({ animeSlug, currentEpisodeId, episode }) => {

  let active = '';
  if (currentEpisodeId)
    if (currentEpisodeId === episode.id) active = 'active';

  return (
    <div className="episode-wrapper">
      <div className={`episode-container ${active}`}>
        <Link to={`/anime/${animeSlug}/${episode.slug}`}>
          <img className="episode-thumbnail" src={ episode.thumbnail } alt={ episode.title } />
          <h3 className="episode-num">Episode { episode.episodeNum }</h3>
          <p className="episode-title">{ episode.title }</p>
        </Link>
      </div>
    </div>
  );
};


export default EpisodeItem;
