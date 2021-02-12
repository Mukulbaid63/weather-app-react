import React from 'react';

const CityWeather = ({weather}) => {
    if(weather!==undefined){
    const weath =`${weather.weather[0].main}`
    const temp=`${weather.main.temp}`
    const humidity=`${weather.main.humidity}`
    const pressure=`${weather.main.pressure}`
    const temp_max=`${weather.main.temp_max}`
    const temp_min=`${weather.main.temp_min}`
    const wind_speed=`${weather.wind.speed}`
    const wind_deg=`${weather.wind.deg}`
    const city=`${weather.name}`
    return (
        <div>
            <p>Weather : {weath}</p>
            <p>Temperature : {temp} °C</p>
            <p>Humidity : {humidity} %</p>
            <p>Pressure : {pressure}</p>
            <p>Maximum Temperature : {temp_max} °C</p>
            <p>Minimum Temperature : {temp_min} °C</p>
            <p>Wind speed : {wind_speed} degrees</p>
            <p>Wind deg : {wind_deg} m/s</p>
            <p>City : {city} ,{weather.sys.country}</p>
        </div>
    );}
    else return (<></>)
};

export default CityWeather;