const initState = {
    authError: null
};

function authReducer(state = initState, action) {
    switch (action.type) {
        case "LOGIN_ERROR":
            console.error("Login error");
            return {
                ...state,
                authError: "Login failed"
            };
        case "LOGIN_SUCCESS":
            console.log("Login success");
            return {
                ...state,
                authError: null
            };
        case "SIGNOUT_SUCCESS":
            console.log("Sign out success");
            return state;
        case "SIGNUP_SUCCESS":
            console.log("Signup success");
            return {
                ...state,
                authError: null
            };
        case "SIGNUP_ERROR":
            console.error("Signup error");
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
}

export default authReducer;