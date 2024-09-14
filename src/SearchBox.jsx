import { Button, TextField } from "@mui/material";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ update }) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);

  let api_url = "https://api.openweathermap.org/data/2.5/weather";
  let api_key = "bfef6b8d8798e4d7c99964b622cd87bf";

  let getWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${api_url}?q=${city}&appid=${api_key}&units=metric`
      );
      let JsonRes = await res.json();
      let results = {
        city: city,
        temp: JsonRes.main.temp,
        tempMin: JsonRes.main.temp_min,
        tempMax: JsonRes.main.temp_max,
        humidity: JsonRes.main.humidity,
        feels_like: JsonRes.main.feels_like,
        weather: JsonRes.weather[0].description,
        windSpeed: JsonRes.wind.speed,
        windDeg: JsonRes.wind.deg,
      };
      console.log(results);
      return results;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      update(newInfo);
      setErr(false);
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Ciry Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="search">
          Search
        </Button>
      </form>
      {err && <p style={{color: "red"}}>No such place exisit!</p>}
    </div>
  );
}
