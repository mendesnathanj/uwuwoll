import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EpisodePage from './episode_page';


const mstp = (state, ownProps) => {

  return { };
};


const mdtp = dispatch => ({

});


export default withRouter(connect(mstp, mdtp)(EpisodePage));
