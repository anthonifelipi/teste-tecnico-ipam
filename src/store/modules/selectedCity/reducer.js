import { SELECTEDCITY } from "./actionsType";

const selectedCityReducer = (city = {}, action) => {
  switch (action.type) {
    case SELECTEDCITY:
      return (city = action.city);
    default:
      return city;
  }
};
export default selectedCityReducer;
