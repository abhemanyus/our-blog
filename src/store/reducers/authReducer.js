const initState = {
  authError: null,
  authSuccess: null
};
const authReducer = (state=initState, action) => {
  switch(action.type) {
    case "LOGIN_SUCCESS": 
      console.log("login successful"); 
      return {...state, authSuccess: "Login Successful", authError: null};
    case "LOGIN_ERROR": 
      console.log("login failed"); 
      return {...state, authSuccess: null, authError: action.error.message };
    case "LOGOUT_SUCCESS": 
      console.log("logout successful"); 
      return {...state, authSuccess: null, authError: null};
    case "LOGOUT_ERROR": 
      console.log("logout failed"); 
      return {...state, authSuccess: null, authError: action.error.message};
    case "SIGNUP_SUCCESS": 
      console.log("signup successful"); 
      return {...state, authSuccess: null, authError: null};
    case "SIGNUP_ERROR": 
      console.log("signup failed"); 
      return {...state, authSuccess: null, authError: action.error.message};
    default: return state;
  }
};

export default authReducer;