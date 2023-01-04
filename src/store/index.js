import { combineReducers, legacy_createStore as createStore } from "redux";
import cityReducer from "./modules/citys/reducer";
import statesReducer from "./modules/states/reducer";

const reducers = combineReducers({
  citys: cityReducer,
  states: statesReducer,
});

const store = createStore(reducers);
export default store;
