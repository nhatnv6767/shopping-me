import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import loggerMiddleware from "../utils/middleware/logger";
import monitorReducerEnhancer from "../utils/enhancers/monitorReducer";
import {rootReducer} from "./root-reducer";


// const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
// const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)


export const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    enhancers: [monitorReducerEnhancer]
})

// export const store = configureStore(
//     {
//         reducer: rootReducer,
//         composedEnhancers
//     }
// )


