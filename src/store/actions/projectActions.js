export function createProject(project) {
    return (dispatch, getState) => {
        // Make async db call
        dispatch({ type: "CREATE_PROJECT", project });
    }
};