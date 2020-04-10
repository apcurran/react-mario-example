const initState = {
    projects: [
        { id: 1, title: "Help me find peach!", content: "Lorem ipsum dolor sit amet." },
        { id: 2, title: "Collect all the stars.", content: "Lorem ipsum dolor sit amet." },
        { id: 3, title: "Egg hunt with Yoshi.", content: "Lorem ipsum dolor sit amet." }
    ]
};

function projectReducer(state = initState, action) {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("Created project", action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.error("create project error", action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;