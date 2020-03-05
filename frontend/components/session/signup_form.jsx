import React from "react";
import SessionErrorsContainer from "../errors/session_errors_container";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '', renderErrors: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)
      .then(() => this.props.history.push("/"))
      .fail(() => this.setState({ renderErrors: true }));
  }

  handleInput(field) {
    return e => { this.setState({ [field]: e.target.value }) };
  }

  render() {
    return (
      <div className="col col-6 mx-auto">
        {this.state.renderErrors ? <SessionErrorsContainer /> : null}
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>
              <span className="form-label">Email</span>
              <input
                className="form-input"
                type="text"
                value={this.state.email}
                onChange={this.handleInput("email")}
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              <span className="form-label">Username</span>
              <input
                type="text"
                className="form-input"
                value={this.state.username}
                onChange={this.handleInput("username")}
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              <span className="form-label">Password</span>
              <input
                type="password"
                className="form-input"
                value={this.state.password}
                onChange={this.handleInput("password")}
                autoComplete="on"
              />
            </label>
          </div>
          <div className='input-container'>
            <button className='btn btn-orange'>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
