import React from 'react';
import { Link } from 'react-router-dom';
import HoverItem from './hover_item';


class AnimeIndexItem extends React.Component {
  render() {
    return (
      <li className="anime-item">
        <h3 className="anime-title">
          <i className="fa-orange title-bookmark far fa-bookmark"></i>
          <span className="title-text">{this.props.anime.title}</span>
        </h3>
        <Link to={`/anime/${this.props.anime.slug}`}>
          <div className="poster-container">
            <img className="small-poster" src={this.props.anime.smallPoster} alt={this.props.anime.title} />
            <HoverItem elementId={this.props.anime.id} title={this.props.anime.title} description={this.props.anime.description} />
          </div>
        </Link>
      </li>
    );
  }
}


export default AnimeIndexItem;
