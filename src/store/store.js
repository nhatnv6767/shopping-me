import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const middleware = []
export const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(...middleware))
)