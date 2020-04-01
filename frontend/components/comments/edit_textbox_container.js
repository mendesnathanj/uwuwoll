import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateComment } from '../../actions/comment_actions';
import { findEpisode, findCurrentUser, findComment } from '../../reducers/selectors';
import Textbox from './textbox';

const dummyParent = { id: null };

const mstp = (state, ownProps) => {

  return {
    review: ownProps.review,
    toggleEdit: ownProps.toggleEdit,
    currentUser: findCurrentUser(state),
    episode: findEpisode(state, ownProps.match.params.episodeSlug),
    formType: 'edit',
    parent: !!ownProps.parent ? findComment(state, ownProps.parent.id) : dummyParent
  }
};

const mdtp = dispatch => ({
  action: comment => dispatch(updateComment(comment))
});


export default withRouter(connect(mstp, mdtp)(Textbox));
