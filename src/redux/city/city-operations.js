import {CityService} from "./service";
import {
    deleteCityInfoError,
    deleteCityInfoSuccess,
    getCityInfoError,
    getCityInfoRequest,
    getCityInfoSuccess, getCityWeatherHourlyError,
    getCityWeatherHourlyRequest,
    getCityWeatherHourlySuccess,
    updateCityInfoError,
    updateCityInfoRequest,
    updateCityInfoSuccess
} from "./city-actions";

const service = new CityService()

export const getCityInfo = (endpoint) => async dispatch => {
    dispatch(getCityInfoRequest())
    try {
        const data = await service.getCity(endpoint)
        dispatch(getCityInfoSuccess(data))
    }catch(e){
        dispatch(getCityInfoError(e))
    }
}

export const getCityWeatherHourly = (endpoint) => async dispatch => {
    dispatch(getCityWeatherHourlyRequest())
    try {
        const data = await service.getCityWeatherHourly(endpoint)
        dispatch(getCityWeatherHourlySuccess(data))
    }catch(e){
        dispatch(getCityWeatherHourlyError(e))
    }
}

export const updateWeather = (name) => async dispatch => {
    dispatch(updateCityInfoRequest)
    try{
        const data = await service.getCity(name)
        dispatch(updateCityInfoSuccess(data))
    }catch (e) {
        dispatch(updateCityInfoError(e))
    }
}

export const deleteCityInfo = (id) => async dispatch => {
    dispatch(deleteCityInfoError())
    try {
        dispatch(deleteCityInfoSuccess(id))
    }catch(e){
        dispatch(deleteCityInfoError(e))
    }
}