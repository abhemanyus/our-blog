const initState = {
  projects: []
};
const projectReducer = (state=initState, action) => {
  switch(action.type) {
    case "CREATE_PROJECT": console.log(action.project); return state;
    case "CREATE_PROJECT_ERROR": console.log(action.error); return state;
    default: return state;
  }
};

export default projectReducer;