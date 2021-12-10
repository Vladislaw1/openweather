import React from 'react';
import {useSelector} from "react-redux";

import {citesInfo} from "../../../redux/city/city-selector";

import WeatherListItem from "../WeatherListItem";

import s from "./WeatherList.module.scss"

function WeatherList() {
    const cites = useSelector(citesInfo)

    return (
        <ul className={s.weatherList}>
            {cites?.map(el => <WeatherListItem key={el.id} {...el}/>)}
        </ul>
    );
}

export default WeatherList;