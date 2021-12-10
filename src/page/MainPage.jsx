import React, {useEffect} from 'react';
import WeatherList from "../client/components/WeatherList";
import Header from "../client/components/Header/Header";
import {useDispatch} from "react-redux";
import {getCityInfo} from "../redux/city/city-operations";
import {allCitesPoint} from "../redux/city/city-endpoint";
import AddCityForm from "../client/components/AddCityForm";

function MainPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            const name = localStorage.getItem(key)
            dispatch(getCityInfo(allCitesPoint(name)))
        }
    }, [dispatch])

    return (
        <div>
            <Header>
                <AddCityForm/>
            </Header>
            <WeatherList />
        </div>
    );
}

export default MainPage;