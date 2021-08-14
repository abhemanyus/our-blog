import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { signinAction } from '../store/actions/authActions';

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  onChange = (e) => {
    this.setState(prevState => Object.assign({}, prevState, {
      [e.target.id]: e.target.value
    }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.signin(this.state);
  }
  render() {
    if (this.props.firebase.auth.uid) return <Redirect to="/"/>
    return (
      <main className="form-signin">
        <form onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
          <div className="form-floating">
            <input onChange={this.onChange} value={this.state.email} type="email" className="form-control" id="email" placeholder="name@example.com" />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input onChange={this.onChange} value={this.state.password} type="password" className="form-control" id="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          {this.props.auth.authError ? <h2 className="text-danger text-center">Login Failed</h2> : null }
          {this.props.auth.authSuccess ? <h2 className="text-success text-center">Login Successful</h2> : null }
          <button className="w-100 btn btn-lg btn-primary" type="submit">Log In</button>
        </form>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  firebase: state.firebase
});

const mapDispatchToProps = (dispatch) => ({
  signin: (credentials) => dispatch(signinAction(credentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);