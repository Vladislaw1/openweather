import React from 'react';
import {converterTime} from "./converterTime";

import style from "./WeatherHourlyListItem.module.scss"

function WeatherHourlyListItem(props) {
    const {temp, feels_like, dt, humidity, wind_speed} = props;
    const {icon, description} = props.weather[0];
    const {time, date} = converterTime(dt)

    return (
        <li className={style.weather_hourly_list_item}>
            <p className={style.weather_hourly_list_item_time}>{time}</p>
            <p className={style.weather_hourly_list_item_date}>{date}</p>
            <img alt={"icon weather"} src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
            <p>{Math.round(temp - 273)}&deg;</p>
            <p>
                Ощущается как: {Math.round(feels_like - 273)}&deg;
            </p>
            <p>Влажность: {humidity}</p>
            <p>Скорость ветра: {wind_speed}м/с</p>
            <p>{description}</p>
        </li>
    );
}

export default WeatherHourlyListItem;