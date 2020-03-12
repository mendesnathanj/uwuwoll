import React from 'react';
import { Link } from 'react-router-dom';
import HoverItem from './hover_item';


const PosterItem = ({ id, smallPoster, largePoster, title, size, description, slug }) => (
  <Link to={`/anime/${ slug }`}>
    <div className={ `${size}-poster-container` }>
      <img src={ size === 'small' ? smallPoster : largePoster } alt={ title }/>
      { size === 'small' ? <HoverItem elementId={id} title={title} description={description} /> : null }
    </div>
  </Link>
);


export default PosterItem;
