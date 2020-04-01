import React from 'react';
import CommentThreadContainer from './comment_thread_container';
import ToggleRepliesBtn from './toggle_replies_btn';
import NewTextboxContainer from './new_textbox_container';
import EditTextboxContainer from './edit_textbox_container';


class CommentThread extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showChildren: false, new: false, edit: false };
    this.toggleChildren = this.toggleChildren.bind(this);
    this.toggleTextbox = this.toggleTextbox.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.closeTextbox = this.closeTextbox.bind(this);

    this.content = this.content.bind(this);
    this.edit = this.edit.bind(this);
  }

  toggleChildren() {
    this.setState({ showChildren: !this.state.showChildren });
  }

  toggleTextbox() {
    this.setState({ new: !this.state.new });
  }

  formatDate(date) {
    return new Date(date).toLocaleDateString(undefined, { dateStyle: 'short', timeStyle: 'short', hour12: true })
  }

  content() {
    if (this.state.edit)
      return <EditTextboxContainer closeTextbox={this.closeTextbox('edit')} review={this.props.parent} />;

    const content = this.props.parent.userId === null ? 'Comment removed by user' : this.props.parent.content;
    return content;
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  closeTextbox(type) {
    return () => this.setState({ [type]: false });
  }

  deleteComment() {
    this.props.deleteComment(this.props.parent);
  }

  edit() {
    if (this.props.author === undefined) return null;

    if (this.props.author.id !== this.props.currentUser.id) return null;

    const text = this.state.edit ? 'Stop editing' : 'Edit';
    return (
      <div className="comment-actions">
        <span onClick={this.toggleEdit} className="edit">{ text }</span>
        <span onClick={this.deleteComment} className="delete">Delete</span>
      </div>
    )
  }


  render() {
    const { children, parent } = this.props;
    let { author } = this.props;
    if (author === undefined) author = { id: -1, username: '' };

    const childThreads = this.state.showChildren ? children.map((child, i) => <CommentThreadContainer key={i} parent={child} />) : null;
    const textbox = this.state.new ? <NewTextboxContainer closeTextbox={this.closeTextbox('new')} parent={parent} /> : null;
    const replyText = this.state.new ? "Don't Reply" : 'Reply';
    const threadOpen = this.state.showChildren ? 'open' : '';
    const username = author.id === -1 ? null : <div className="comment-author">{author.username}</div>;

    return (
      <div className={`thread ${threadOpen}`}>
        <div className="comment-container">
          <div className="comment-info">
            <div className="user-info">
              { username }
              <div className="date-written">{this.formatDate(parent.updatedAt)}</div>
            </div>
            {this.edit()}
          </div>
          <div className="comment">{this.content()}</div>
          <div className="comment-options">
            <span className="reply-btn" onClick={this.toggleTextbox}>{replyText}</span>
            <ToggleRepliesBtn
              toggleChildren={this.toggleChildren}
              showing={this.state.showChildren}
              childCount={children.length} />
            <SpoilerBtn />
        </div>
          {textbox}
        </div>
        <div className={`children`}>
          { childThreads }
        </div>
      </div>
    );
  }
}


export default CommentThread;
