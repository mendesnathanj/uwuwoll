import { connect } from 'react-redux';
import Errors from './errors';


const mstp = state => ({
  errors: state.errors.session
});

export default connect(mstp, null)(Errors);
