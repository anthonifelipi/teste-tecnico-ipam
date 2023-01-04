const statesReducer = (states = [], action) => {
  switch (action.type) {
    case "@states":
      return (states = action.states);
    default:
      return [];
  }
};
export default statesReducer;
