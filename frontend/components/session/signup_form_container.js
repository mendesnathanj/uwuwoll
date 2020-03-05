import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';


const mstp = () => ({
  formType: 'Sign up'
});

const mdtp = dispatch => ({
  signup: user => dispatch(signup(user))
});


export default connect(mstp, mdtp)(SignupForm);
