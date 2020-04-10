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
        default:
            return state;
    }
}

export default authReducer;