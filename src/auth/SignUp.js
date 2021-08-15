import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { signupAction } from '../store/actions/authActions';

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  onChange = (e) => {
    this.setState(prevState => Object.assign({}, prevState, {
      [e.target.id]: e.target.value
    }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state);
  }
  render() {
    if (this.props.uid) return <Redirect to="/login"/>;
    return (
      <main className="form-signin">
        <form onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 fw-normal text-center">Create An Account</h1>
          <div className="form-floating">
            <input onChange={this.onChange} value={this.state.firstName} type="name" className="form-control" id="firstName" placeholder="First Name" required/>
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="form-floating">
            <input onChange={this.onChange} value={this.state.lastName} type="name" className="form-control" id="lastName" placeholder="Last Name" required/>
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="form-floating">
            <input onChange={this.onChange} value={this.state.email} type="email" className="form-control" id="email" placeholder="name@example.com" required/>
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input onChange={this.onChange} value={this.state.password} type="password" className="form-control" id="password" placeholder="Password" required/>
            <label htmlFor="password">Password</label>
          </div>
          {this.props.auth.authError ? <h2 className="text-danger text-center">{this.props.auth.authError}</h2> : null }
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
        </form>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  uid: state.firebase.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  signup: (newUser) => dispatch(signupAction(newUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);