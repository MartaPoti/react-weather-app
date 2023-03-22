import axios from "axios";
import React, {useState, useEffect} from "react";
import DayForecast from "./DayForecast";
import './WeatherForecast.css'

export default function WeatherForecast(props){
    let [ready,setReady]=useState(false);
    let [forecast,setForecast]=useState(null);
    
    useEffect(() => {
 setReady(false)
    }, [props.city])
    
    function HandleResponse(response){
             
        setReady(true)
        setForecast(response.data.daily)
        
    }

    
    if (ready) {
        return( 
    <div className="WeatherForecast">
    <div className="row mt-4">

        {forecast.map(function(dailyForecast,index) {
            if(index<5){
            return (<div className="col Weekdays" key={index}>
            <DayForecast data={dailyForecast}/>
            </div>);
            }
        })} 
    
</div>
</div>
);
        
    } else {
    const apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=eb35dd952a431a4636oae87ff0c619et`
    axios.get(apiUrl).then(HandleResponse);
    return null;
    } }