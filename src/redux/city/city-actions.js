import {createAction} from "@reduxjs/toolkit";

export const getCityInfoRequest = createAction("getCityInfoRequest")
export const getCityInfoSuccess = createAction("getCityInfoSuccess")
export const getCityInfoError = createAction("getCityInfoError")

export const getCityWeatherHourlyRequest = createAction("getCityWeatherHourlyRequest")
export const getCityWeatherHourlySuccess = createAction("getCityWeatherHourlySuccess")
export const getCityWeatherHourlyError = createAction("getCityWeatherHourlyError")

export const updateCityInfoRequest = createAction("updateCityInfoRequest")
export const updateCityInfoSuccess = createAction("updateCityInfoSuccess")
export const updateCityInfoError = createAction("updateCityInfoError")

export const deleteCityInfoRequest = createAction("deleteCityInfoRequest")
export const deleteCityInfoSuccess = createAction("deleteCityInfoSuccess")
export const deleteCityInfoError = createAction("deleteCityInfoError")