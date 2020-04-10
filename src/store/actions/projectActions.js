export function createProject(project) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make async db call
        const firestore = getFirestore();
        firestore
            .collection("projects")
            .add({
                ...project,
                authorFirstName: "Alex",
                authorLastName: "Curran",
                authorId: 1213,
                createdAt: new Date()
            })
            .then(() => dispatch({ type: "CREATE_PROJECT", project }))
            .catch(err => dispatch({ type: "CREATE_PROJECT_ERROR", err }));
    };
};