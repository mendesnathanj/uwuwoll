import React from 'react';
import CommentThreadContainer from './comment_thread_container';
import ToggleRepliesBtn from './toggle_replies_btn';


class CommentThread extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showChildren: false };
    this.toggleChildren = this.toggleChildren.bind(this);
  }

  toggleChildren() {
    this.setState({ showChildren: !this.state.showChildren });
  }

  formatDate(date) {
    return new Date(date).toLocaleDateString(undefined, { dateStyle: 'short', timeStyle: 'short', hour12: true })
  }

  render() {
    const { author, children, parent } = this.props;
    const childThreads = children.map(child => <CommentThreadContainer parent={child} />);
    const childrenClasses = this.state.showChildren ? "open" : "";

    return (
      <div className="thread">
        <div className="comment-info">
          <div className="comment-author">{author.username}</div>
          <div className="date-written">{this.formatDate(parent.updatedAt)}</div>
        </div>
        <div className="comment">{parent.content}</div>
        <ToggleRepliesBtn
          toggleChildren={this.toggleChildren}
          showing={this.state.showChildren}
          childCount={children.length} />
        <div className={`children ${childrenClasses}`}>
          { childThreads }
        </div>
      </div>
    );
  }
}


export default CommentThread;
