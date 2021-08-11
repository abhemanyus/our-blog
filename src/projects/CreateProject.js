import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions';

class CreateProject extends Component {
  state = {
    title: "",
    body: ""
  };
  onChange = (e) => {
    this.setState(prevState => Object.assign({}, prevState, {
      [e.target.id]: e.target.value
    }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
  }
  render() {
    return (
      <main className="form-CreateProject">
        <form onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 fw-normal text-center">Create Project</h1>
          <div className="form-floating">
            <input onChange={this.onChange} value={this.state.title} type="text" className="form-control" id="title" placeholder="Toxoplasm Gondii" />
            <label htmlFor="title">Title</label>
          </div>
          <div className="form-floating">
            <textarea rows="3" onChange={this.onChange} value={this.state.body} type="text" className="form-control" id="body" placeholder="Mind-controlling parasite spread by felines" />
            <label htmlFor="body">Start typing here</label>
          </div>
          <button className="w-100 btn btn-lg btn-success" type="submit">Create</button>
        </form>
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createProject: (project) => dispatch(createProject(project))
});

export default connect(null, mapDispatchToProps)(CreateProject);