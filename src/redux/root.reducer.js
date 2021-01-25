import { combineReducers } from "redux";
import commandingReducer from "./commanding-panel/commanding-panel.reducer"
import parameterDisplayReducer from "./parameter-display/parameter-display.reducer";

const rootReducer =  combineReducers({
    commanding: commandingReducer,
    parameter: parameterDisplayReducer
});

export default rootReducer;