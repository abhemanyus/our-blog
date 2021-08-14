const initState = {
  authError: null,
  authSuccess: null
};
const authReducer = (state=initState, action) => {
  switch(action.type) {
    case "LOGIN_ERROR": 
      console.log("login failed"); 
      return {...state, authError: "Login failed", authSuccess: null};
    case "LOGIN_SUCCESS": 
      console.log("login successful"); 
      return {...state, authSuccess: "Login Successful", authError: null};
    case "LOGOUT_SUCCESS": 
      console.log("logout successful"); 
      return {...state, authSuccess: null, authError: null};
    case "LOGOUT_ERROR": 
      console.log("logout failed"); 
      return {...state, authSuccess: null, authError: "logout failed"};
    default: return state;
  }
};

export default authReducer;