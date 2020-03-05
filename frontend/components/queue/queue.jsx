import React from 'react';
import { Link } from 'react-router-dom';

class Queue extends React.Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    const savedAnime = this.props.savedAnime.map(anime => {
      const episodes = anime.episodeIds.map(id => this.props.episodes[id])
                        .map(ep => <div><Link to={`/anime/${anime.id}/episodes/${ep.id}`}>{ ep.title }</Link></div>);

      return (
        <div>
          <div>{anime.title}</div>
          <div>
            { episodes }
          </div>
        </div>
      )
    });
    return (
      <div>
        <div>hewwo i'm the quwu</div>
        { savedAnime }
      </div>
    );
  }
}

export default Queue;
