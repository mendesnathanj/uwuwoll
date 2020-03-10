import React from 'react';
import ReactPlayer from 'react-player';


class EpisodePage extends React.Component {
  componentDidMount() {
    this.props.fetchAnime(this.props.match.params.animeSlug);
  }

  render() {
    if (!this.props.episode) return null;
    return (
      <video width="640px" height="auto" autoPlay="autoplay" controls>
        <source src={this.props.episode.videoUrl} />
       </video>
    )
    // return (
    //   <ReactPlayer
    //     id="player"
    //     playing={true}
    //     url={this.props.episode.videoUrl}
    //     controls
    //   />
    // );
  }
}


export default EpisodePage;
