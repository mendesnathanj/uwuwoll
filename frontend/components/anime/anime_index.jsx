import React from 'react';
import AnimeIndexItem from './anime_index_item';

class AnimeIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllAnime();
  }

  render() {
    const animeItems = this.props.anime.map(anime =>  <AnimeIndexItem key={anime.id} anime={anime} /> );

    return (
      <div className="anime-container">
        <div className="header-container">
          <h1 className="anime-header">Anime</h1>
        </div>
        <ul className="anime-container">{ animeItems }</ul>
      </div>
    );
  }
}

export default AnimeIndex;
