import React from 'react';
import CommentThreadContainer from './comment_thread_container';
import NewTextboxContainer from './new_textbox_container';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { comments, currentUser } = this.props;
    let commentThreads = <h1 className="no-comments">No comments here yet! :(</h1>;
    if (comments.length > 0)
      commentThreads = comments.map(comment => <CommentThreadContainer parent={comment} currentUser={currentUser} />);

    return (
      <div className="comment-section">
        <NewTextboxContainer closeTextbox={null} />
        <div className="comments">
          { commentThreads }
        </div>
      </div>
    );
  }
}


export default CommentSection;
