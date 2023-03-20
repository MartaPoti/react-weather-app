import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './Weather.css';


export default function Weather (props) {
const [weather,setWeather]=useState({ });


    function handleResponse (response) {

        console.log(response.data);
   
        setWeather({
            ready: true,
            city: response.data.city,
            time: "Wednesday, 12:00",
            temperature: Math.round(response.data.temperature.current),
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            pressure: response.data.temperature.pressure,
            description:response.data.condition.description,
            icon_url: response.data.condition.icon_url
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
    <h1>{weather.city}</h1>
    <ul>
        <li>{weather.time}</li>
        <li className="text-capitalize">{weather.description}</li>
    </ul>

    <div className="row mt-3">
        <div className="col-6">
        <div className="d-flex">
            <img src={weather.icon_url} 
            className ="" 
            alt={weather.description}/>
            <div className ="" >
            <span className="temperature" >{weather.temperature}</span>
            <span className="unit">°C</span>
            </div>
        </div>
        </div>
        <div className="col-6">
            <ul>
            <li>Pressure: {weather.pressure}hPa</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind}km/h</li>
            </ul>
        </div>    
    </div>
   
</div>)
}

else { 
    const city=props.defaultCity
const apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=eb35dd952a431a4636oae87ff0c619et`
axios.get(apiUrl).then(handleResponse)

return "Loading.."}


}