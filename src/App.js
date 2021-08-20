import { Component } from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Dashboard from "./dashboard/Dashboard";
import Navbar from "./layout/Navbar";
import CreateProject from "./projects/CreateProject";
import ProjectDetails from "./projects/ProjectDetails";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App container container-fluid">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:project_id" component={ProjectDetails}/>
            <Route path="/login" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/create" component={CreateProject}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
