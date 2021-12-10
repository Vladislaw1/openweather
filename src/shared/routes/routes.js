import {Switch ,Route} from "react-router-dom";

import MainPage from "../../page/MainPage";
import CityWeatherPage from "../../page/CityWeatherPage";

function Routers(props) {
    return(
        <Switch>
            <Route exact path={"/openweather"} component={MainPage}/>
            <Route exact path={"/weather/:name"} component={CityWeatherPage}/>
        </Switch>
    )
}

export default Routers;