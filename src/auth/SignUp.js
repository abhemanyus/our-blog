import React, { Component } from 'react'

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
    console.log(this.state);
  }
  render() {
    return (
      <main className="form-signin">
        <form onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 fw-normal text-center">Create An Account</h1>
          <div className="form-floating">
            <input onChange={this.onChange} value={this.state.firstName} type="name" className="form-control" id="firstName" placeholder="First Name" />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="form-floating">
            <input onChange={this.onChange} value={this.state.lastName} type="name" className="form-control" id="lastName" placeholder="Last Name" />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="form-floating">
            <input onChange={this.onChange} value={this.state.email} type="email" className="form-control" id="email" placeholder="name@example.com" />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input onChange={this.onChange} value={this.state.password} type="password" className="form-control" id="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
        </form>
      </main>
    )
  }
}

export default SignUp;