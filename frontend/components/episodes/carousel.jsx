import React from 'react';
import EpisodeItem from './episode_item';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const episodes = this.props.episodes.reverse().map(episode => (
      <EpisodeItem key={ episode.id } currentEpisodeId={ this.props.currentEpisodeId } animeSlug={ this.props.animeSlug } episode={ episode } />
    ));

    return (
    <div className="episode-carousel">
      { episodes }
    </div>
    )
  }
}


export default Carousel;
