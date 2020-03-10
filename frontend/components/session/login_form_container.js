import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { withRouter } from "react-router-dom";
import SessionForm from "./session_form";


const mstp = () => ({
  formType: 'wogin!'
});

const mdtp = dispatch => ({
  action: user => dispatch(login(user)),
  loginAsGuest: () => dispatch(login({ identifier: 'wyansawms', password: 'password' }))
});


export default withRouter(connect(mstp, mdtp)(SessionForm));
