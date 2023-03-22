import React from "react";
import './App.css';
export default function Temperature(props){


    
return (<div className ="" >
            <span className="temperature" >{props.celcius}</span>
            <span className="unit">°C </span>
            </div>);
            
        }