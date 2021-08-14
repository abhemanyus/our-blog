import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Projects</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          {props.auth.uid ? <SignedInLinks/> : <SignedOutLinks/>}
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(Navbar);