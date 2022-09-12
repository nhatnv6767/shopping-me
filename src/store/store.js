import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from "./root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import loggerMiddleware from "../utils/middleware/logger";

import {configureStore} from "@reduxjs/toolkit";
import monitorReducerEnhancer from "../utils/enhancers/monitorReducer";


const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)

export const store = createStore(rootReducer, undefined, composedEnhancers)

// export const store = configureStore(
//     {
//         reducer: rootReducer,
//         composedEnhancers
//     }
// )


