import React from 'react';
import AnimeIndexItem from './anime_index_item';

class AnimeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const start = new Date().getTime();

    this.props.fetchAllAnime()
    .then(() => console.log(new Date().getTime() - start));
  }

  render() {
    const animeItems = this.props.anime.map(anime => {
      const saved = this.props.savedAnime.includes(Number(anime.id));

      return (
        <AnimeIndexItem
          createSavedAnime={this.props.createSavedAnime}
          deleteSavedAnime={this.props.deleteSavedAnime}
          key={anime.id}
          anime={anime}
          saved={saved} />
      );
    });

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
