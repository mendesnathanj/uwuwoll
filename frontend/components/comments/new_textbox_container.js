import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postComment } from '../../actions/comment_actions';
import { findEpisode, findCurrentUser, findComment } from '../../reducers/selectors';
import Textbox from './textbox';

const dummyParent = { id: null };
const review = { content: '', spoiler: false };

const mstp = (state, ownProps) => {

  return {
    review,
    closeTextbox: ownProps.closeTextbox,
    currentUser: findCurrentUser(state),
    episode: findEpisode(state, ownProps.match.params.episodeSlug),
    parent: !!ownProps.parent ? findComment(state, ownProps.parent.id) : dummyParent,
    formType: 'new'
  }
};

const mdtp = dispatch => ({
  action: comment => dispatch(postComment(comment))
});


export default withRouter(connect(mstp, mdtp)(Textbox));
