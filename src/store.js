import { createStore } from "redux";
import rootReducer from "./redux/root.reducer";

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
);

export default store;