import { connect } from 'react-redux';
import { findCurrentUser } from '../../reducers/selectors';
import CommentSection from './comment_section';


const mstp = (state, ownProps) => ({
  currentUser: findCurrentUser(state),
  comments: Object.values(state.entities.comments).filter(comment => comment.episodeId === ownProps.episode.id && comment.parentId === null).reverse()
});


export default connect(mstp, null)(CommentSection);
