import React, { useState } from 'react';
import './App.css';
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
function App() {
  const [city,setCity]=useState("");
  const [weather, setweather] = useState();
  const fetchCityWeather =()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4c496af33d732297c30b641b3b235e47`)
    .then((response)=>
      response.json()
    ).then((result)=>{setweather(result)})
  }
  return (
    <div className="m-5">
    <CityInput city={city} 
    setCity={setCity}
    fetchCityWeather={fetchCityWeather}/>
    <CityWeather weather={weather} setweather={setweather}/>
    </div>
  );
}

export default App;
