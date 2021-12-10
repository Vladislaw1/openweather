import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk"

import cityReducer from "./city/city-reducer"

const middleware = getDefaultMiddleware(thunk)

export const store = configureStore({
    reducer:{
        weather: cityReducer
    },
    middleware
})