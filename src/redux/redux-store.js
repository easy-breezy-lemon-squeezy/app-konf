import { configureStore } from '@reduxjs/toolkit'
import slice from "./slice";
import logger from 'redux-logger'
export const store = configureStore({
    reducer: {
        map: slice,
    },
    middleware: [logger],
})