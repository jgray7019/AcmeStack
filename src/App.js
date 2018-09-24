import React, { Component } from 'react';

import './styles/App.css';

import logo from './svg/logo-acmestack.svg';
import facebook from './svg/logo-facebook.svg';
import google from './svg/logo-google.svg';
import twitter from './svg/logo-twitter.svg';

import FormSignIn from './components/form-sign-in';
import FormSignOut from './components/form-sign-out';
import SignInSocial from './components/sign-in-social';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: true,
        loading: false,
    }
  }

  signIn(username, password) {
    this.setState({
      user: {
        username,
        password
      }
    })
  }

  signOut() {
    this.setState({
      user: null
    })
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="header__wrapper">
            <h1 className="header__title">AcmeStack</h1>
            <div className="header__logo--container">
              <img src={logo} className="header__logo" alt="AcmeStack logo" />
            </div>
          </div>
        </header>
        <section className={this.state.user? "section--signedIn section" : "section"}>
          <div className="section__wrapper">
            {(this.state.user) ?
              <div className="section__container--signedOut">
                <FormSignIn onSignIn={this.signIn.bind(this)}/>
                <SignInSocial facebook={facebook} twitter={twitter} google={google} />
              </div>
            :
              <FormSignOut onSignOut={this.signOut.bind(this)}/>
            }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
