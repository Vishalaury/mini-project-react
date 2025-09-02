import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBOx from './SearchBox';
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
    });

    let  updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    return(
        <div>
            <h1>Weather App by Delta</h1>
             <SearchBOx updateInfo={updateInfo}/>   
      <InfoBox info={weatherInfo}/>
        </div>
    )
}