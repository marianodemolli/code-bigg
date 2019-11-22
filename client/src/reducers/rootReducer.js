import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
const rootReducer = combineReducers({city: citiesReducer});
export default rootReducer;