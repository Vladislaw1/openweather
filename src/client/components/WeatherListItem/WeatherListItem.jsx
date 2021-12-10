import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCityInfo, getCityInfo} from "../../../redux/city/city-operations";

import s from "./WeatherListItem.module.scss"
import {Link} from "react-router-dom";
import {allCitesPoint} from "../../../redux/city/city-endpoint";

function WeatherListItem(props) {
    const dispatch = useDispatch()
    const {name} = props
    const {lat, lon} = props.coord
    const {temp_min, temp_max} = props.main
    const {icon, description} = props.weather[0]

    function handleClick() {
        localStorage.removeItem(name.toLowerCase())
        dispatch(deleteCityInfo(props.id))
    }

    function updateWeather() {
        dispatch(getCityInfo(allCitesPoint(name)))
    }

    return (
        <li className={s.weatherListItem}>
            <button className={s.btn_update} onClick={updateWeather}>&#8634;</button>
            <button className={s.btn_delete} onClick={handleClick}>&#10008;</button>
            <Link className={s.weatherListItem_link} to={`/weather/${name}?lat=${lat}&lon=${lon}`}>
                <p>{name}</p>
                <img alt={"awq"} src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
                <div>
                    <p>min:{Math.round(temp_min - 273)}&deg;</p>
                    <p>max:{Math.round(temp_max - 273)}&deg;</p>
                    <p>{description}</p>
                </div>
            </Link>
        </li>
    );
}

export default WeatherListItem;