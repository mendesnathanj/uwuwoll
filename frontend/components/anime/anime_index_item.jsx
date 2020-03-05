import React from 'react';
import { Link } from 'react-router-dom';


class AnimeIndexItem extends React.Component {
  render() {
    return (
      <li>
        <Link to={`/anime/${this.props.anime.id}`}>
          <div>
            { this.props.anime.title }
          </div>
          <div>
            { this.props.anime.episodeCount } Videos
          </div>
        </Link>
      </li>
    )
  }
}


export default AnimeIndexItem;
