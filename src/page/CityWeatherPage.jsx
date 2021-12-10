import React, {useEffect} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getCityWeatherHourly} from "../redux/city/city-operations";
import {cityWeatherPoint} from "../redux/city/city-endpoint";
import WeatherHourlyList from "../client/components/WeatherHourlyList";
import Header from "../client/components/Header/Header";

import style from "./CityWeatherHourlyPage.module.scss"

function CityWeatherPage(props) {
    const {name} = props.match.params

    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getCityWeatherHourly(cityWeatherPoint((location.search))))
    }, [dispatch, location.search])


    return (
        <div className={style.section}>
            <Header>
                <h1 className={style.caption}>Погода на ближайшие 48 часов в {name}</h1>
            </Header>
            <button className={style.btn_goBack} onClick={history.goBack}>Go Back</button>
            <WeatherHourlyList/>
        </div>
    );
}

export default CityWeatherPage;