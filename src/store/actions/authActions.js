import firebase from "firebase/app";
import "firebase/auth";

export function signIn(credentials) {
    return (dispatch, getState) => {
        firebase.auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then( () => dispatch({ type: "LOGIN_SUCCESS" }) )
            .catch( err => dispatch({ type: "LOGIN_ERROR", err }) );
    }
}

export function signOut() {
    return (dispatch, getState) => {
        firebase.auth().signOut()
            .then(() => dispatch({ type: "SIGNOUT_SUCCESS" }));
    }
}