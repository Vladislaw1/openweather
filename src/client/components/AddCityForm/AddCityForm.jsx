import React, {useCallback, useState} from 'react';
import {useDispatch} from "react-redux";

import useForm from "../../../shared/hooks/useForm";

import {getCityInfo} from "../../../redux/city/city-operations";
import {allCitesPoint} from "../../../redux/city/city-endpoint";

function AddCityForm() {
    const dispatch = useDispatch()

    const [name,setName] = useState("")

    const onSubmit = useCallback((data) => {
        dispatch(getCityInfo(allCitesPoint(data)))
        localStorage.setItem(data.toLowerCase(), data)
    }, [dispatch])

    const [data,handleChange, handleSubmit] = useForm(name, onSubmit)

    return (
        <form>
            <input onChange={handleChange} name={"name"} value={data} placeholder={"City name"}/>
            <button onClick={handleSubmit}>Add</button>
        </form>
    );
}

export default AddCityForm;