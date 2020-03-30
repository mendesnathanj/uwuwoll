import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel';
import Video from './video';
import CommentSectionContainer from '../comments/comment_section_container';


class EpisodePage extends React.Component {
  componentDidMount() {
    this.props.fetchAnime(this.props.match.params.animeSlug);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.animeSlug !== this.props.match.params.animeSlug)
      this.props.fetchAnime(this.props.match.params.animeSlug);
  }

  render() {
    if (this.props.episode === undefined) return null;

    let { episode, episodes, anime } = this.props;

    return (
      <div className="episode-page-container">
        <h1 className="episode-header"><Link className="anime-link" to={`/anime/${anime.slug}`}>{ anime.title }</Link> { `Episode ${ episode.episodeNum } - ${ episode.title }` }</h1>
        {/* <Video src={ episode.video } /> */}
        <Carousel currentEpisodeId={ episode.id } animeSlug={ anime.slug } episodes={ episodes } />
        <CommentSectionContainer episode={ episode } />
      </div>
    );
  }
}


export default EpisodePage;
