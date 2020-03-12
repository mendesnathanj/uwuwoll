import React from 'react';
import { Link } from 'react-router-dom';


class EpisodeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { currentEpisodeId, episode, animeSlug } = this.props;

    let active = '';
    if (currentEpisodeId)
      if (currentEpisodeId === episode.id) active = 'active';

    return (
      <div className="episode-wrapper">
        <Link to={`/anime/${animeSlug}/${episode.slug}`}>
          <div className={`episode-container ${active}`}>
              <img className="episode-thumbnail" src={ episode.thumbnail } alt={ episode.title } />
              <h3 className="episode-num">Episode { episode.episodeNum }</h3>
              <p className="episode-title">{ episode.title }</p>
          </div>
        </Link>
      </div>
    );
  }
};


export default EpisodeItem;
