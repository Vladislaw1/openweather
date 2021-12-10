import React from 'react';
import {useSelector} from "react-redux";

import {v4} from 'uuid';

import {citesWeatherHourly} from "../../../redux/city/city-selector";
import WeatherHourlyListItem from "../WeatherHourlyListItem";

import style from "./WeatherHourlyList.module.scss"

function WeatherHourlyList() {
    const weatherCity = useSelector(citesWeatherHourly)

    return (
        <ul className={style.weather_hourly_list}>{weatherCity?.map(el => <WeatherHourlyListItem key={v4()} {...el}/>)}</ul>
    );
}

export default WeatherHourlyList;