import React from 'react';
import EpisodeItem from './episode_item';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.currentEpisodeId) return;

    return;
    let carousel = document.querySelector('#episode-carousel');
    let currentEp = document.querySelector('.episode-container.active');
    carousel.scrollLeft = currentEp.offsetLeft - carousel.offsetLeft;
  }

  render() {
    if (this.props.episodes.includes(undefined)) return null;

    console.log(this.props.episodes);
    const episodes = this.props.episodes.reverse().map(episode => (
      <EpisodeItem key={ episode.id } currentEpisodeId={ this.props.currentEpisodeId } animeSlug={ this.props.animeSlug } episode={ episode } />
    ));

    return (
      <div id="episode-carousel" className="episode-carousel">
        { episodes }
      </div>
    )
  }
}


export default Carousel;
