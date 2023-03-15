import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Weather.css';

export default function Weather () {

return(
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
    <h1>New York</h1>
    <ul>
        <li>Tuesday, 20:59</li>
        <li>Mostly Cloudly</li>
    </ul>

    <div className="row mt-3">
        <div className="col-6">
        <div className="d-flex">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAjdJREFUeNrtmsGtgzAMhjtCRmAERsgIHYFjjx2BERiBEToCI+TaG2+DbJBnKj8pD1Eaiv8AwpX+C1Ap/hzHjpNLCOFyZl0UgAJQAApAASgABaAAFIACODEA9C/83AypIrUkRwpv5Pib4dsCNp5cAMgIS3rMGPxJw3/t4QDQoEtSt8LwsTpJEFAAAONjNUM4HSIEOO7vJC8Mwa2FkHURZBDSM2KAWu4CwPP5LEgtyZMCy/OzIgKBgGA2BUAGliPDxxreldFM2EU4JAOgwRtSPeHdmj0/Z3z8fcEQasTCiATgEgxMURvNAkR2sOIA2MtBSH60KNbC4dAhAHhBACFDdrBiADj2A0DI7PA4AgB0dihWAaBBXUk92Hhkdqi+BsDGh8ySzg7tGgD9BgC88FrgvgKQIeY/ZgepxXB3m6EFm6bm7ADqQwDggSLUHQVA2KG6P50JQJ+a96UBuC08OwqRerOWGPftkUa7Oc/GrTBKo5b0mEivwzOLAlABjb8v6EY1CXVGgwCAampUqZ5NNP5fuS1aB6w87Zn1PG+XpStOKw3AIro5IONfM0e8EhRsZFxz7EYRACRmgQc0YPMAENrAdJk6UBgAKwojz/W/yQUgXgilARguS5dUd2Yir+foPzSQ7TAfifdLOjZvzhSzQID0A3gmuJTDzIQzRXg4IC9IvFsY68jzWxr/qgvQV2TsRJ1gwMXOIuW+JNWhjtx2DWCDE6fvAOhNUQWgABSAAlAACkABKAAFoABOp1+6Bd0LJ+BorgAAAABJRU5ErkJggg==" 
            className ="" 
            alt="cloudly"/>
            <div className ="" >
            <span className="temperature" >6</span>
            <span className="unit">°C</span>
            </div>
        </div>
        </div>
        <div className="col-6">
            <ul>
                <li>Precupitation: 15%</li>
                <li>Humidity: 65%</li>
                <li>Wind: 5km/h</li>
            </ul>
        </div>    
    </div>
   
</div>

);
}