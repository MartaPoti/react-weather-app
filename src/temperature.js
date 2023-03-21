import React, {useState} from "react";

export default function Temperature(props){


    function showF(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showC(event){
        event.preventDefault();
        setUnit("celcius");
    }
    const [unit,setUnit]=useState("celcius")
    if (unit==="celcius") {
return (<div className ="" >
            <span className="temperature" >{props.celcius}</span>
            <span className="unit">°C |{" "}<a href="/" onClick={showF}>°F</a></span>
            </div>);
            } else {

                let fahrenheit=Math.round((props.celcius)*9/5 + 32);
                return (<div className ="" >
                <span className="temperature" >{fahrenheit}</span>
                <span className="unit"><a href="/" onClick={showC}>°C</a> |{" "}°F</span>
                </div>);
            }

        }