import React from 'react';
import CommentThreadContainer from './comment_thread_container';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { comments, currentUser } = this.props;
    console.log('COMMENTS FROM COMMENT SECTION: ', comments);
    const commentThreads = comments.map(comment => <CommentThreadContainer parent={comment} currentUser={currentUser} />);

    return (
      <div className="comment-section">
        <div>hewwo i will be the textbox stuff</div>
        <div className="comments">
          { commentThreads }
        </div>
      </div>
    );
  }
}


export default CommentSection;
