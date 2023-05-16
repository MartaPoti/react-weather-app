
import Weather from "./weather"
import './App.css';


export default function App() {
  return (
    <div className="App">
    <div className="container">
     <Weather defaultCity="Heilbronn"/>
    <footer>This project was coded by {" "} Marta Potulska and is opensourced on {" "} <a href="https://github.com/MartaPoti/react-weather-app"> GitHub</a>
    </footer>
    </div>
    </div>
  );
}

 
