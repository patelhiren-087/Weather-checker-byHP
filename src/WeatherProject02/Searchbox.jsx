import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Searchbox({updateInfo}) {

  let [city,setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  // const API_KEY = "73806993514cbce70b940aef9a2e30ff";
  const apikey = import.meta.env.VITE_WEATHER_API;


  "https://api.openweathermap.org/data/2.5/weather?q={surat}&appid={13564698b42185e6dd600705c0384982}"
  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${apikey}&units=metric`);
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    let result = {
      city : jsonResponse.name,
      temp : jsonResponse.main.temp,
      tempMin : jsonResponse.main.temp_min,
      tempMax : jsonResponse.main.temp_max,
      humidity : jsonResponse.main.humidity,
      feelsLike : jsonResponse.main.feels_like,
      weather : jsonResponse.weather[0].description,
    };
    // console.log(result);
    return result;
  }



  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let handleSubmit = async(event) => {
    event.preventDefault();
    // console.log("City Name:", city);
    setCity(""); // clear the input field after form submission
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  }

  return (
  <div className="m-5">
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
        <br />
        <br />

        <Button variant="contained" color="success" endIcon={<SendIcon />} type="submit">
          Send
        </Button>
      </form>
  </div>
  );
}

export default Searchbox;
