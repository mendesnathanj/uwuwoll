import React from 'react';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { formType: 'sign up!' };

    this.swapForms = this.swapForms.bind(this);
  }

  swapForms(formType) {
    this.setState({ formType });
  }

  renderForm() {
    if (this.props.match.path === '/') {
      if (this.state.formType === 'sign up!')
        return <SignupFormContainer swapForms={this.swapForms} />;
      else
        return <LoginFormContainer swapForms={this.swapForms} />;
    } else {
      if (this.props.match.path === '/login')
        return <LoginFormContainer swapForms={this.swapForms} />;
      else
        return <SignupFormContainer swapForms={this.swapForms} />;
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="landing-content">
          <h1 className="landing-title">
            uwuwoll!
            <span className="mini-white-logo-container">
              <img className="white-logo-mini" src={window.whiteLogo} alt="" />
            </span>
          </h1>
          <p className="landing-tagline">
            the number one streaming service for anime
          </p>
          { this.renderForm() }
        </div>
      </div>
    );
  }
}


export default LandingPage;
