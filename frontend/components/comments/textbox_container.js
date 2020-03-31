import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postComment } from '../../actions/comment_actions';
import { findEpisode, findCurrentUser, findComment } from '../../reducers/selectors';
import Textbox from './textbox';

const dummyParent = { id: null };

const mstp = (state, ownProps) => {

  return {
    currentUser: findCurrentUser(state),
    episode: findEpisode(state, ownProps.match.params.episodeSlug),
    parent: !!ownProps.parent ? findComment(state, ownProps.parent.id) : dummyParent
  }
};

const mdtp = dispatch => ({
  postComment: comment => dispatch(postComment(comment))
});


export default withRouter(connect(mstp, mdtp)(Textbox));
