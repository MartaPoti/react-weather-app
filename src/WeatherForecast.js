import axios from "axios";
import React, {useState} from "react";
import DayForecast from "./DayForecast";
import './WeatherForecast.css'

export default function WeatherForecast(props){
    let [ready,setReady]=useState(false);
    let [forecast,setForecast]=useState(null);
    
    
    function HandleResponse(response){
       console.log(response.data)
        
        setReady(true)
        setForecast(response.data.daily)
        
    }

    
    if (ready) {
        return( 
    <div className="WeatherForecast">
    <div className="row mt-3">
    <div className="col Weekdays">
<DayForecast data={forecast[0]}/>
</div>
</div>
</div>
);
        
    } else {
    const apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=eb35dd952a431a4636oae87ff0c619et`
    axios.get(apiUrl).then(HandleResponse);
    return null;
    } }