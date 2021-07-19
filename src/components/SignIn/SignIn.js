import React from "react";

//pure function // then changed to state component to have input of email & password
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    } 
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method:'post',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(Response => Response.json())
    .then(data => {
      if (data === 'success') {
        this.props.onRouteChange('home');
      }
    })
    
  }

  render() {
    const {onRouteChange} = this.props;
  return (
    //tachyons SignIn
    <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
      <article className="pa4 black-80">
        <div action="sign-up_submit" method="get" accept-charset="utf-8">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="email-address">
                Email address
              </label>
              <input
              className="pa2 input-reset ba bg-transparent w-100 measure"
                type="email"
                name="email-address"
                id="email-address"
                onChange={this.onEmailChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent"
                type="password"
                name="password"
                id="password"
                onChange={this.onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="mt3">
            <input
              onClick={this.onSubmitSignIn}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
              type="submit"
              value="Sign In"
            />
          </div>
          <div className="1h-copy mt3">
            <p onClick={() => onRouteChange('register')} href="#0" className="f6 link dim black db pointer">
              Register
            </p>
          </div>
        </div>
      </article>
    </article>
  );
}
};

export default SignIn;
