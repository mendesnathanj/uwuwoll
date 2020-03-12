import React from 'react';
import PosterItem from './poster_item';


class AnimeIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleAnime = this.toggleAnime.bind(this);
  }

  toggleAnime() {
    const { saved, anime, deleteSavedAnime, createSavedAnime } = this.props;

    if (saved)
      deleteSavedAnime(anime.id);
    else
      createSavedAnime(anime.id);
  }

  render() {
    let icon;
    if (this.props.saved)
      icon = <i onClick={ this.toggleAnime } className="fas fa-orange title-bookmark fa-bookmark"></i>;
    else
      icon = <i onClick={ this.toggleAnime } className="fa-orange title-bookmark far fa-bookmark"></i>;

    return (
      <li className="anime-item">
        <h3 className="anime-title">
          { icon }
          <span className="title-text">{this.props.anime.title}</span>
        </h3>

          <PosterItem {...this.props.anime} size="small" />
      </li>
    );
  }
}


export default AnimeIndexItem;
