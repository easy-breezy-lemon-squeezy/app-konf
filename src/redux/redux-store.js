import { configureStore } from '@reduxjs/toolkit'
import {mapSlice} from "./slice";

export const store = configureStore({
    reducer: {
        map: mapSlice,
    },
})