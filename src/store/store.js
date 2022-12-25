import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

export const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
);
