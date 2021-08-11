


import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/signup">Sign up</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Log In</NavLink>
            </li>
          </ul>
  );
}

export default SignedOutLinks;