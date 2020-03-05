import React from 'react';
import SessionErrorsContainer from '../errors/session_errors_container';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { identifier: '', password: '', renderErrors: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { identifier: this.state.identifier, password: this.state.password };

    this.props.login(user)
      .then(() => this.props.history.push('/'))
      .fail(() => this.setState({ renderErrors: true }));
  }

  handleInput(field) {
    return e => { this.setState({ [field]: e.target.value })}
  }

  render() {

    return (
      <div className="col col-6 mx-auto">
        { this.state.renderErrors ? <SessionErrorsContainer /> : null }
        <form className='container-sm form' onSubmit={this.handleSubmit}>
          <div className='input-container'>
            <label><span className='form-label'>Username:</span>
              <input className='form-input' type="text" value={this.state.identifier} onChange={this.handleInput('identifier')} />
            </label>
          </div>
          <div className='input-container'>
            <label><span className='form-label'>Password:</span>
              <input className='form-input' type="password" value={this.state.password} onChange={this.handleInput('password')} autoComplete='on' />
            </label>
          </div>
          <div className='input-container'>
            <button className='btn btn-orange'>Login</button>
          </div>
        </form>
        <div className='input-container'>
          <button className='btn btn-orange' onClick={() => this.props.loginAsGuest()}>Login as guest</button>
        </div>
      </div>
    );
  }
}


export default LoginForm;
