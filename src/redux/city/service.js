import {BaseHttpService} from "../../shared/service/base-http-service";

export class CityService extends BaseHttpService{
    async getCity(endpoint){
        try {
            const data = await this.get(endpoint)
            return data
        }catch (e) {

        }
    }
    async getCityWeatherHourly(endpoint){
        try {
            const data = await this.get(endpoint)
            return data
        }catch (e) {

        }
    }
}