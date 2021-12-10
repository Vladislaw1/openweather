import {useState} from "react";

const useForm = (initialState,onSubmit = () => {}) => {
    const [data,setData] = useState(initialState)

    const handleChange = ({target}) => {
        const {value} = target
        setData(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(data)
        clearInput()
    }

    const clearInput = () => {
        setData("")
    }
    return [data,handleChange,handleSubmit]
}

export default useForm;