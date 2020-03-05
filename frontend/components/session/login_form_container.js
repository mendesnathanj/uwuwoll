import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';


const mdtp = dispatch => ({
  login: user => dispatch(login(user)),
  loginAsGuest: () => dispatch(login({ identifier: 'wyansawms', password: 'password' }))
});


export default connect(null, mdtp)(LoginForm);
