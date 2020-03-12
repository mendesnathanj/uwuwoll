import React from 'react';
import { Link } from 'react-router-dom';
import PosterItem from '../anime/poster_item';
import Carousel from '../episodes/carousel';


class SavedAnimeItem extends React.Component {
  constructor(props) {
    super(props);

    this.removeAnimeFromQueue = this.removeAnimeFromQueue.bind(this);
  }

  removeAnimeFromQueue() {
    this.props.deleteSavedAnime(this.props.anime.id);
  }

  render() {
    const { anime, episodes } = this.props;
    const truncatedText = anime.description.length > 430 ? anime.description.slice(0, 430) + '...' : anime.description;

    return (
      <div className="queue-item">
        <div className="poster-wrapper">
          <PosterItem {...this.props.anime} size="small" />
        </div>
        <div className="queue-item-details">
          <div className="details-text">
            <div className="details-title">
              <Link className="anime-link" to={`/anime/${anime.slug}`}>{ anime.title }</Link>
              <i onClick={ this.removeAnimeFromQueue } className="fas fa-orange title-bookmark fa-bookmark"></i>
            </div>
            <p className="anime-details">{ truncatedText }</p>
          </div>
          <Carousel animeSlug={ anime.slug } episodes={ episodes } />
        </div>
      </div>
    );
  }
}


export default SavedAnimeItem;
