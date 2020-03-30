import React from 'react';


const ToggleRepliesBtn = ({ toggleChildren, showing, childCount }) => {
  if (childCount === 0) return null;

  const text = showing ? 'Hide Replies' : 'Show Replies';

  return <div className="show-replies" onClick={toggleChildren}>{ text }</div>;
};


export default ToggleRepliesBtn;
