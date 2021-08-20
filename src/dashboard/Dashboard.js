import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router";
import { compose } from "redux";

const { Component } = require("react");
const { default: ProjectList } = require("../projects/ProjectList");
// const { default: Notifications } = require("./Notifications");

class Dashboard extends Component {
  render() {
    if (!this.props.auth.uid) return <Redirect to="/login"/>
    return(
      <div className="container container-fluid p-4 p-md-5 mb-4 row">
        <div className="col-12 col-md-7">
          <ProjectList projects={this.props.projects}/>
        </div>
        {/* <div className="col-12 col-md-4 offset-md-1">
          <Notifications/>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
});

export default compose(
  connect(mapStateToProps), 
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'], limit: 3 }
  ])
  )(Dashboard);