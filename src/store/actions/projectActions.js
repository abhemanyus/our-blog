export const createProject = (project) => {
  return (dispatch, getState) => ({
    type: "CREATE_PROJECT",
    project
  });
};
