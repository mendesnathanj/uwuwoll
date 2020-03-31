import React from 'react';
import CommentThreadContainer from './comment_thread_container';
import ToggleRepliesBtn from './toggle_replies_btn';
import TextboxContainer from './textbox_container';


class CommentThread extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showChildren: false, showTextbox: false };
    this.toggleChildren = this.toggleChildren.bind(this);
    this.toggleTextbox = this.toggleTextbox.bind(this);
  }

  toggleChildren() {
    this.setState({
      showChildren: !this.state.showChildren });
  }

  toggleTextbox() {
    this.setState({ showTextbox: !this.state.showTextbox });
  }

  formatDate(date) {
    return new Date(date).toLocaleDateString(undefined, { dateStyle: 'short', timeStyle: 'short', hour12: true })
  }

  render() {
    const { author, children, parent } = this.props;
    const childThreads = this.state.showChildren ? children.map((child,i ) => <CommentThreadContainer key={i} parent={child} />) : null;
    const textbox = this.state.showTextbox ? <TextboxContainer parent={parent} /> : null;
    const replyText = this.state.showTextbox ? "Don't Reply" : 'Reply';

    return (
      <div className="thread">
        <div className="comment-info">
          <div className="comment-author">{author.username}</div>
          <div className="date-written">{this.formatDate(parent.updatedAt)}</div>
        </div>
        <div className="comment">{parent.content}</div>
        <div className="comment-options">
          <span onClick={this.toggleTextbox}>{ replyText }</span>
          { textbox }
          <ToggleRepliesBtn
            toggleChildren={this.toggleChildren}
            showing={this.state.showChildren}
            childCount={children.length} />
        </div>
        <div className={`children`}>
          { childThreads }
        </div>
      </div>
    );
  }
}


export default CommentThread;
