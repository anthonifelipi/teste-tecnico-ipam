import { STATES } from "./actionsType";

const statesReducer = (states = [], action) => {
  switch (action.type) {
    case STATES:
      return (states = action.states);
    default:
      return states;
  }
};
export default statesReducer;
