import React from 'react';
import { Link } from "react-router-dom";
import SearchResults from './search_results';


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { filteredAnime: [], searchText: '' };

    this.redirectToRandomAnime = this.redirectToRandomAnime.bind(this);
    this.searchForAnime = this.searchForAnime.bind(this);
    this.clearResults = this.clearResults.bind(this);
  }

  componentDidMount() {
    this.props.fetchNavbarInfo();
  }

  searchForAnime(e) {
    if (e.target.value === '') {
      this.setState({ filteredAnime: [], searchText: e.target.value });
      return;
    }

    const filteredAnime = this.props.anime.filter(anime => (
      anime.title.toLowerCase().includes(e.target.value)
    ));

    this.setState({ filteredAnime: filteredAnime, searchText: e.target.value });
  }

  redirectToRandomAnime() {
    let { anime, episodes, seasons } = this.props;

    let randomAnime = anime[Math.floor(Math.random() * anime.length)];

    let episode = Object.values(episodes).find(ep => {
      let season = seasons[ep.seasonId];

      return (
        ep.episodeNum === 1 &&
        ep.animeId === randomAnime.id &&
        (ep.seasonId === null || season.seasonNum === 1)
      );
    });

    let url = `/anime/${randomAnime.slug}/${episode.slug}`;
    this.props.history.push(url);
  }

  clearResults() {
    this.setState({ searchText: '' });
  }

  render() {
    if (["/", "/login", "/signup"].includes(this.props.location.pathname))
      return null;

    if (!this.props.currentUser) return null;

    return (
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-home-link">
            <Link to="/">
              <img className="nav-home-link-logo" src={window.orangeLogo} />
              uwuwoll!
            </Link>
          </li>
          <li className="nav-li" key="anime">
            <Link to="/anime">
              <i className="fa-orange fas fa-tv"></i>
            </Link>
            <span className="nav-text">anime</span>
          </li>
          <li className="nav-li" key="queue">
            <Link to="/queue">
              <i className="fa-orange far fa-bookmark"></i>
            </Link>
            <span className="nav-text">queue</span>
          </li>
          {/* <li
            className="nav-li"
            key="random"
            onClick={this.redirectToRandomAnime}
          >
            <i className="fa-orange fas fa-dice-two"></i>
            <span className="nav-text">random</span>
          </li> */}
          <li
            className="nav-li"
            key="logout"
            onClick={() =>
              this.props.logout().then(() => this.props.history.push("/login"))
            }
          >
            <i className="fa-orange fas fa-user-alt"></i>
            <span className="nav-text">logout</span>
          </li>
          <li className="nav-li search-bar-container">
            <input
              className="search-bar"
              placeholder="find your next anime..."
              type="text"
              value={ this.state.searchText }
              onChange={ this.searchForAnime }
              onBlur={ this.clearResults }
            />
            <SearchResults anime={ this.state.filteredAnime } />
          </li>
        </ul>
      </nav>
    );
  }
}


export default Navbar;
