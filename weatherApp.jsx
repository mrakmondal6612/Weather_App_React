import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./src/SearchBox";

export default function WeathereApp() {
  const [weather, setWeather] = useState({
    city: "Delhi",
    feels_like: 12.16,
    humidity: 67,
    temp: 13.05,
    tempMax: 13.05,
    tempMin: 13.05,
    weather: "haze",
    windDeg: 0,
    windSpeed: 0,
  });
  let update = (res) => {
    setWeather(res);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginRight: "35px" }}>
        <h3>Weather App By Mr. AK</h3>
        <SearchBox update={update} />
      </div

      <InfoBox info={weather}/>
    </div>
  );
}
