import React from 'react';
import EpisodeList from './episode_list';


class SeasonItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: this.props.expanded };
    this.toggleEpisodeList = this.toggleEpisodeList.bind(this);
  }

  toggleEpisodeList() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const episodes = this.props.episodes.filter(ep => ep.seasonId === this.props.season.id);

    let hideEpisodes = this.state.expanded ? '' : 'hide-episodes';
    let rotateCaret = this.state.expanded ? '' : 'fa-rotate-90';

    return (
      <div className="season-container">
        <div className="video-container">
          <h2 className="season-title" onClick={this.toggleEpisodeList}>
            {this.props.season.title}
            <i id={`season-caret-${this.props.season.id}`} className={`season-title-caret fas fa-caret-down ${rotateCaret}`}></i>
          </h2>
          <div id={`episodes-${this.props.season.id}`} className={`episode-list-wrapper ${hideEpisodes}`}>
            <EpisodeList animeSlug={this.props.animeSlug} episodes={episodes} />
          </div>
        </div>
      </div>
    );
  }
}


export default SeasonItem;
