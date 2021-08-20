export const signinAction = (credentials) => {
  return (dispatch, _getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then( () => {
      dispatch({type: "LOGIN_SUCCESS"});
    }).catch( (err) => {
      dispatch({type: "LOGIN_ERROR", error: err});
    });
  }
}

export const signoutAction = () => {
  return (dispatch, _getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then( ()=> {
      dispatch({type: "LOGOUT_SUCCESS"});
    }).catch( (err) => {
      dispatch({type: "LOGOUT_ERROR", error: err});
    });
  }
}

export const signupAction = (newUser) => {
  return (dispatch, _getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then( (res) => {
      return firestore.collection('users').doc(res.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        initials: (newUser.firstName[0] + newUser.lastName[0]).toUpperCase()
      }).then( () => console.log("added user")).catch( () => console.log("couldn't add user"))
    }).then( () => {
        dispatch({type: "SIGNUP_SUCCESS"})
        }
      ).catch( (err) => {
      dispatch({type: "SIGNUP_ERROR", error: err});
    });
  }
}