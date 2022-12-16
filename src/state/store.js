import { createStoreHook } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"; // it is used to help execute async functions.
import reducers from "./reducers"

export const store = createStoreHook(reducers, {}, applyMiddleware(thunk))

// To give access of this store to the whole application, I'll use 'Provider' in the index.js (main entry file )