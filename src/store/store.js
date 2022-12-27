import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
