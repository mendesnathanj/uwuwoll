import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';


const mstp = () => ({
  formType: 'sign up!'
});

const mdtp = dispatch => ({
  action: user => dispatch(signup(user))
});


export default withRouter(connect(mstp, mdtp)(SessionForm));
