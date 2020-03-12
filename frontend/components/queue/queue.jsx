import React from 'react';
import SavedAnimeItem from './saved_anime_item';
import EmptyQueueItem from './empty_queue_item';

class Queue extends React.Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    let { currentUser, savedAnime, episodes } = this.props;

    console.log('SAVED_ANIME: ', savedAnime);

    const displayName = currentUser.username.endsWith('s') ? `${currentUser.username}'` : `${currentUser.username}'s`;

    let content;
    if (!savedAnime) {
      content = <EmptyQueueItem />
    } else {
      if (savedAnime.length === 0) {
        content = <EmptyQueueItem />
      } else {
        const savedAnimeItems = savedAnime.map(anime => {
          const filteredEpisodes = episodes.filter(episode => episode.animeId === anime.id).reverse();
            return <SavedAnimeItem deleteSavedAnime={this.props.deleteSavedAnime} key={ anime.id } anime={ anime } episodes={ filteredEpisodes } />;
        });

        content = savedAnimeItems;
      }
    }

    return (
      <div className="queue-container">
        <div className="header-container">
          <h1 className="anime-header">{`${ displayName } Queue`}</h1>
        </div>
        <div className="queue-items-container">
          { content }
        </div>
      </div>
    );
  }
}

export default Queue;
