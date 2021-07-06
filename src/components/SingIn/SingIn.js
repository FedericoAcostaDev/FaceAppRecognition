import React from "react";

//pure function
const SingIn = ({ onRouteChange }) => {
  return (
    //tachyons SignIn
    <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
      <article className="pa4 black-80">
        <form action="sign-up_submit" method="get" accept-charset="utf-8">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="email-address">
                Email address
              </label>
              <input
                className="pa2 input-reset ba bg-transparent w-100 measure"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="mt3">
            <input
              onClick={() => onRouteChange('home')}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
              type="submit"
              value="Sign In"
            />
          </div>
          <div className="1h-copy mt3">
            <a href="#0" className="f6 link dim black db">
              Register
            </a>
          </div>
        </form>
      </article>
    </article>
  );
};

export default SingIn;
