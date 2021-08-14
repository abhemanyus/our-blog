import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router';
import { compose } from 'redux';

function ProjectDetails(props) {
  if (!props.auth.uid) return <Redirect to="/login"/>
  const {title, content, authorFirstName, authorLastName, createdAt, authorID} = props.project;
  return (
    <div className="p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-12 p-lg-5 mx-auto my-5">
      <h1 className="display-4 fw-normal">{title}</h1>
      <pre className="lead fw-normal text-wrap">{content}</pre>
      <a className="text-decoration-underline text-muted text-capitalize" href={"/author/" + authorID}>{authorFirstName + " " + authorLastName}</a>
      <p className="footer text-muted">{createdAt && createdAt.toDate().toString()}</p>
    </div>
  </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.project_id;
  const projects = state.firestore.data.projects;
  return {
    project: projects ? projects[id] : state.project.projects[0],
    auth: state.firebase.auth
  }
};

export default compose(
  connect(mapStateToProps), 
  firestoreConnect([
    { collection: 'projects' }
  ])
  )(ProjectDetails);
