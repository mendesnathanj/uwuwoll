import React from 'react';
import CommentThreadContainer from './comment_thread_container';


class CommentThread extends React.Component {
  render() {
    const { author, children, parent } = this.props;
    console.log('CHILDREN FROM PROPS: ', children);
    if (children === undefined) return null;

    // console.log(children);
    const childThreads = children.map(child => <CommentThreadContainer parent={child} />);

    return (
      <div className="thread">
        <div className="comment">{parent.content}</div>
        <div className="children">
          { childThreads }
        </div>
      </div>
    );
  }
}


export default CommentThread;
