import axios from "axios";

export class BaseHttpService {
    BASE_URL = "http://api.openweathermap.org/data/2.5";
    USER_KEY = "b5c6ee162439d799c35b2730084db6e5"

    async get(endpoint){
        try{
            const {data} = await axios.get(`${this.BASE_URL}/${endpoint}&appid=${this.USER_KEY}`)
            return data
        }catch (e) {

        }
    }
}