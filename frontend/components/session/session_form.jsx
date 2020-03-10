import React from "react";
import SessionErrorsContainer from "../errors/session_errors_container";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '', renderErrors: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.swapForms = this.swapForms.bind(this);
    this.toggleErrors = this.toggleErrors.bind(this);
    this.loginAsGuest = this.loginAsGuest.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let user;
    if (this.props.formType === 'sign up!')
      user = { username: this.state.username, email: this.state.email, password: this.state.password };
    else
      user = { identifier: this.state.username, password: this.state.password };

    let that = this;

    this.props.action(user)
      .fail(() => that.setState({ renderErrors: true }));
  }

  handleInput(field) {
    return e => { this.setState({ [field]: e.target.value }) };
  }

  toggleErrors() {
    this.setState({ renderErrors: !this.state.renderErrors });
  }

  emailField() {
    if (this.props.formType === "sign up!") {
      return (
        <div className="input-container">
          <input
            className="form-input"
            type="text"
            placeholder=" "
            value={ this.state.email }
            onChange={this.handleInput("email")}
          />
          <span className="floating-email-label">email</span>
        </div>
      );
    }

    return null;
  }

  swapForms() {
    if (this.props.formType === 'sign up!') this.props.swapForms('wogin!');
    else this.props.swapForms('sign up!');
  }

  renderCta() {
    return (
      <Link
        className="form-cta"
        to={this.props.formType === "sign up!" ? "/login" : "/signup"}
      >
        {this.props.formType === "sign up!"
          ? "already have an account? wogin!"
          : "don't have an account yet? sign up today!"}
      </Link>
    );
  }

  renderFormTitle() {
    if (this.props.formType === 'sign up!')
      return <h3 className="form-title">sign up for a free account today!</h3>;
    else
      return <h3 className="form-title">uwu welcome back!</h3>
  }

  loginAsGuest(e) {
    e.preventDefault();

    this.props.loginAsGuest();
  }

  renderDemoLogin() {
    if (this.props.formType === 'wogin!')
      return <div className="form-btn larger-btn" onClick={ this.loginAsGuest }>guest wogin!</div>;

    return null;
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-background"></div>
        {this.state.renderErrors ? <SessionErrorsContainer toggleErrors={ this.toggleErrors } /> : null}
        <form className="form" onSubmit={ this.handleSubmit }>
          {this.renderFormTitle()}
          {this.emailField()}
          <div className="input-container">
            <input
              type="text"
              placeholder=" "
              className="form-input"
              value={this.state.username}
              onChange={this.handleInput("username")}
            />
            <span className={ this.props.formType === 'sign up!' ? 'floating-label' : 'dual-floating-label' }>
              { this.props.formType === 'sign up!' ? 'username' : 'email or username' }
            </span>
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder=" "
              className="form-input"
              value={this.state.password}
              onChange={this.handleInput("password")}
              autoComplete="on"
            />
            <span className="floating-label">password</span>
          </div>
          <div className="input-container form-btn-container">
            <button className="form-btn">{this.props.formType}</button>
            { this.renderDemoLogin() }
          </div>
          <div className="cta-container">
            <div className="cta-wrapper">{this.renderCta()}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
