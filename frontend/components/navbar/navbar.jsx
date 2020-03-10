import React from 'react';
import { Link } from "react-router-dom";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch all anime titles and episode titles along with slugs
  }

  searchForShow() {
    // search all anime
  }

  render() {
    if (["/", "/login", "/signup"].includes(this.props.location.pathname)) return null;

    if (!this.props.currentUser) return null;

    return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-home-link"><Link to='/'><img className="nav-home-link-logo" src={ window.orangeLogo }/>uwuwoll!</Link></li>
        <li className="nav-li" key='anime'>
          <Link to='/anime'>
            <i className="fa-orange fas fa-tv"></i>
          </Link>
          <span className="nav-text">anime</span>
        </li>
        <li className="nav-li" key='queue'>
          <Link to='/queue'>
            <i className="fa-orange far fa-bookmark"></i>
          </Link>
          <span className="nav-text">queue</span>
        </li>
        <li className="nav-li" key='random'>
          <Link to={ this.props.randomAnime() }>
            <i className="fa-orange fas fa-dice-two"></i>
            <span className="nav-text">random</span>
          </Link>
        </li>
        <li className="nav-li" key="logout" onClick={ () => this.props.logout().then(() => this.props.history.push('/login')) }>
          <i className="fa-orange fas fa-user-alt"></i>
          <span className="nav-text">logout</span>
        </li>
        <li className="nav-li search-bar-container"><input className="search-bar" placeholder="find your next anime..." type="text"/></li>
      </ul>
    </nav>
  )
  }
}


export default Navbar;
