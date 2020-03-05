import React from 'react';
import { Link } from 'react-router-dom';


class SeasonItem extends React.Component {
  render() {
    const episodes = this.props.episodes
      .filter(ep => ep.seasonId === this.props.season.id)
      .map(ep => <Link key={ep.id} to={`/anime/${this.props.animeId}/episodes/${ep.id}`}><div>{ep.title}</div></Link>);

    return (
      <div>
        <div>{this.props.season.title}</div>
        { episodes }
      </div>
    )
  }
}


export default SeasonItem;
