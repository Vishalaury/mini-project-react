import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({updateInfo}) {
    
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "6020444b2df732c7dfe8b991fa15710a"



const getWeatherInfo = async () => {
  try{

let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  let jsonResponse = await response.json();

  let result = {
    city: city,
    temp: jsonResponse.main.temp,
    tempMin: jsonResponse.main.temp_min,
    tempMax: jsonResponse.main.temp_max,
    humidity: jsonResponse.main.feels_like,
    weather: jsonResponse.weather[0].description
  }
  console.log(result);
  return result;
  }catch(error){
    throw err;
  }
  
};



  // handle input change
  const handleChange = (evt) => {

    setCity(evt.target.value);
  };

  // handle form submit
  const handleSubmit =async (evt) => {
    try{
 evt.preventDefault(); // page reload rokne ke liye
    console.log("City searched:", city);
    setCity("");
  let newinfo= await getWeatherInfo();
  updateInfo(newinfo);
    }catch(err){
      setError(true);
    }
  
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="searchBox"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No such place exists!</p>}
      </form>
    </div>
  );
}
