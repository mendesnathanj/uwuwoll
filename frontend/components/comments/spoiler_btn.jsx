import React from 'react';


const SpoilerBtn = ({ spoiler, show, toggle }) => {
  if (!spoiler) return null;

  const text = show ? "Hide Spoiler" : 'Show Spoiler';
  return <span onClick={toggle} className="show-spoiler">{ text }</span>
}


export default SpoilerBtn;
