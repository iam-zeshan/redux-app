import { combineReducers } from "redux"; // if we've multiple reducers then, we can to export them as a single file using combinedReducers (library of redux)
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    amount: amountReducer // Here, we've only one reducer but we can export multiple reducers using this syntax
})

export default reducers;