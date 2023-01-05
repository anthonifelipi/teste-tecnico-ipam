import { CITYS } from "./actionsType";

const cityReducer = (citys = [], action) => {
  switch (action.type) {
    case CITYS:
      return (citys = action.citys);
    default:
      return citys;
  }
};
export default cityReducer;
