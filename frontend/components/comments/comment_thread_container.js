import { connect } from 'react-redux';
import CommentThread from './comment_thread';
import { findCurrentUser } from '../../reducers/selectors';
import { deleteComment } from '../../actions/comment_actions';

const mstp = (state, ownProps) => ({
  children: Object.values(state.entities.comments).filter(child => child.parentId === ownProps.parent.id),
  author: Object.values(state.entities.users).find(user => user.id === ownProps.parent.userId),
  currentUser: findCurrentUser(state)
});

const mdtp = dispatch => ({
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(mstp, mdtp)(CommentThread);
