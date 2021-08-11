const initState = {
  projects: [
    {id: 0, title: "How to make spaghetti", content: "Google it, dumbass!"},
    {id: 1, title: "My feet smell like pizza", content: "But they sure don't taste like it..."},
    {id: 2, title: "Squirrels are superior to cats", content: "Cuz they don't infect you with a mind-controlling parasite."}
  ]
};
const projectReducer = (state=initState, action) => {
  switch(action.type) {
    case "CREATE_PROJECT": console.log(action.project); return state;
    default: return state;
  }
};

export default projectReducer;