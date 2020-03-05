import React from 'react';
import SeasonItem from './season_item';

class AnimePage extends React.Component {
  componentDidMount() {
    this.props.fetchAnime(this.props.match.params.animeId);
  }

  render() {
    if (!this.props.anime) return null;
    const seasonItems = this.props.seasons.map(season => <SeasonItem animeId={this.props.anime.id} key={season.id} season={season} episodes={this.props.episodes} />)

    return (
      <div className="anime-page">
        <h1>{this.props.anime.description}</h1>
        <h1>{this.props.anime.title}</h1>
        { seasonItems }
      </div>
    );
  }
}


export default AnimePage;
