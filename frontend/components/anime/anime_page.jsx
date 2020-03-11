import React from 'react';
import SeasonItem from './season_item';
import EpisodeList from './episode_list';

class AnimePage extends React.Component {
  componentDidMount() {
    this.props.fetchAnime(this.props.match.params.slug);
  }

  render() {
    if (!this.props.anime) return null;

    let seasonItems;
    if (this.props.seasons.length > 0) {
      seasonItems = this.props.seasons.map((season, i) => {
        return <SeasonItem expanded={i === 0} animeSlug={this.props.anime.slug} key={season.id} season={season} episodes={this.props.episodes} />
      });
    } else {
      seasonItems = <EpisodeList animeSlug={ this.props.anime.slug } expanded={true} episodes={this.props.episodes} />
    }

    return (
      <div className="anime-page-container">
        <div className="header-container anime-page-header-container">
          <h1 className="anime-header">{ this.props.anime.title }</h1>
        </div>
        <div className="left-col-anime-page">
          <div className="large-poster-container">
            <img className="repsonsive-img" src={ this.props.anime.largePoster } alt=""/>
          </div>
          <p className="anime-page-description">Number of episodes: { this.props.anime.episodeCount }</p>
          <p className="anime-page-description">{this.props.anime.description}</p>
        </div>
        <div className="right-col-anime-page">
          { seasonItems }
        </div>
      </div>
    );
  }
}


export default AnimePage;
