import React from 'react';
import EpisodeItem from '../episodes/episode_item';


class EpisodeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const episodes = this.props.episodes.map(episode => (
      <EpisodeItem key={ episode.id } animeSlug={this.props.animeSlug} episode={episode} />
    ));

    return (
        <div className='episode-list'>{episodes}</div>
    );
  }
}


export default EpisodeList;
