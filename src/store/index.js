import { combineReducers, legacy_createStore as createStore } from "redux";
import cityReducer from "./modules/citys/reducer";
import selectedCityReducer from "./modules/selectedCity/reducer";
import statesReducer from "./modules/states/reducer";

const reducers = combineReducers({
  citys: cityReducer,
  states: statesReducer,
  city: selectedCityReducer,
});

const store = createStore(reducers);
export default store;
