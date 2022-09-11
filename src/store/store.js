import {compose, createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import {rootReducer} from "./root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

// run after action hit reducer
// const middleWares = [logger]
// const composedEnhancers = compose(applyMiddleware(...middleWares))
// export const store = createStore(rootReducer, undefined, composedEnhancers)

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)