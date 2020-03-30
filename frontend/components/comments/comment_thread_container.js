import { connect } from 'react-redux';
import CommentThread from './comment_thread';

const mstp = (state, ownProps) => ({
  children: Object.values(state.entities.comments).filter(child => child.parentId === ownProps.parent.id),
  author: Object.values(state.entities.users).find(user => user.id === ownProps.parent.userId)
});


export default connect(mstp, null)(CommentThread);
