import React from 'react';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const searchItems = this.props.anime.map(anime => (
      <Link key={anime.id} className="result-link" to={`/anime/${anime.slug}`}>
        <div className="result-container">
          <span className="search-title">{anime.title}</span>
        </div>
      </Link>
    ));

    return (
      <div className="search-results">
        { searchItems }
      </div>
    );
  }
}


export default SearchResults;
