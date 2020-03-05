import React from 'react';
import AnimeIndexItem from './anime_index_item';

class AnimeIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllAnime();
  }

  render() {
    const animeItems = this.props.anime.map(anime => {

      return <AnimeIndexItem key={anime.id} anime={anime} />
    });

    return (
      <div>
        <ul>
          { animeItems }
        </ul>
      </div>
    );
  }
}


export default AnimeIndex;
