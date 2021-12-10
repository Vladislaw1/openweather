import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {
    deleteCityInfoSuccess,
    getCityInfoSuccess,
    getCityWeatherHourlySuccess,
    updateCityInfoRequest
} from "./city-actions";

const cites = createReducer([], {
    [getCityInfoSuccess]: (state, {payload}) => {
        const idx = state.findIndex(item => item.name === payload.name)
        if (idx !== -1) return
        return [...state, payload]
    },
    [updateCityInfoRequest]: (state,{payload}) => {
        const idx = state.findIndex(item => item.id === payload.id)
        console.log(idx)
        if (idx !== -1){
            state[idx] = payload
        }
    },
    [deleteCityInfoSuccess]: (state,{payload}) => {
        const idx = state.findIndex(item => item.id === payload)
        if (idx !== -1){
            state.splice(idx,1)
        }
    }

})
const weather_hourly = createReducer({},{
    [getCityWeatherHourlySuccess]: (_,{payload}) => payload
})
export default combineReducers({
    cites,
    weather_hourly
})
