


import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signoutAction } from "../store/actions/authActions";


const SignedInLinks = (props) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/create">New Project</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={() => props.logout()} className="nav-link" to="/">Log Out</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">STM</NavLink>
            </li>
          </ul>
  );
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(signoutAction())
});
export default connect(null, mapDispatchToProps)(SignedInLinks);