import React from "react";

export default function DayForecast(props){


    function day(){
    let date= new Date (props.data.time * 1000)
    let day= date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return days[day];
    }

    return(
<>
    <div className="Weekday">
        {day()}
    </div>
    <div className="icon">
        <img src={props.data.condition.icon_url} alt={props.data.condition.description}></img>
    </div>
    <div className="Temperatures">
        <span className="tempmax">{Math.round(props.data.temperature.maximum)}°C</span> 
        <span className="tempmin">{Math.round(props.data.temperature.minimum)}°C</span>
    </div>
</>
    )
}