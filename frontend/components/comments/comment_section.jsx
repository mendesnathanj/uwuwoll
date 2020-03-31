import React from 'react';
import CommentThreadContainer from './comment_thread_container';
import TextboxContainer from './textbox_container';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { comments, currentUser } = this.props;
    const commentThreads = comments.map(comment => <CommentThreadContainer parent={comment} currentUser={currentUser} />);

    return (
      <div className="comment-section">
        <TextboxContainer />
        <div className="comments">
          { commentThreads }
        </div>
      </div>
    );
  }
}


export default CommentSection;
