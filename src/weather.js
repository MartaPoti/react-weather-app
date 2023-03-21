import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './Weather.css';
import WeatherInfo from "./weatherInfo";

export default function Weather (props) {
const [weather,setWeather]=useState({ready:false });


    function handleResponse (response) {

        console.log(response.data);
   
        setWeather({
            ready: true,
            city: response.data.city,
            temperature: Math.round(response.data.temperature.current),
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            pressure: response.data.temperature.pressure,
            description:response.data.condition.description,
            icon_url: response.data.condition.icon_url,
            date: new Date(response.data.time * 1000),
        });
            
       
    }
    
if (weather.ready){ return(
<div className="Weather">
    <form className="">
        <div className="row">
            <div className="col-9 ">

            <input type="search" 
            className="form-control"
            autoFocus="on"
            />
            </div>
        <div className="col-3">
        <input type="submit" value="search" className="btn btn-primary w-100" />
        </div>
        </div>
    </form>
    <WeatherInfo data= {weather} />
   
</div>);
}

else { 
    const city=props.defaultCity
const apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=eb35dd952a431a4636oae87ff0c619et`
axios.get(apiUrl).then(handleResponse)

return "Loading.."}


}