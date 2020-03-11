import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel';
import Video from './video';


class EpisodePage extends React.Component {
  componentDidMount() {
    this.props.fetchAnime(this.props.match.params.animeSlug);
  }

  render() {
    if (!this.props.episode) return null;

    let { episode, episodes, anime } = this.props;

    return (
      <div className="episode-page-container">
        <h1 className="episode-header"><Link className="anime-link" to={`/anime/${anime.slug}`}>{ anime.title }</Link> { `Episode ${ episode.episodeNum } - ${ episode.title }` }</h1>
        <Video src={ episode.video } />
        <Carousel currentEpisodeId={ episode.id } animeSlug={ anime.slug } episodes={ episodes } />
      </div>
    );
  }
}


export default EpisodePage;
