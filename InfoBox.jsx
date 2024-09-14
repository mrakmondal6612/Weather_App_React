import "./InfoBox.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function InfoBox({ info }) {
  let weatherInfo = info;

  let Img_Url =
    "https://cdn.firstcry.com/education/2022/12/09111755/Learn-about-Weather.jpg";
  let Rain_Url =
    "https://www.shutterstock.com/image-vector/rain-clouds-lightening-bolt-paper-260nw-1852097425.jpg";
  let Hot_url =
    "https://img.freepik.com/premium-vector/too-hot-summer-character-heat-stroke-high-temperature-warning-hot-summer-day-vector_432516-2717.jpg";
  let Cold_Url =
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              weatherInfo.humidity > 80
                ? Rain_Url
                : weatherInfo.temp > 16
                ? Hot_url
                : Cold_Url
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city } &nbsp;
              { weatherInfo.humidity > 80 ? (
                <ThunderstormIcon />
              ) : weatherInfo.temp > 16 ? (
                <LightModeIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <div>Temperature : {weatherInfo.temp} &deg;C</div>
              <div>Humidity : {weatherInfo.humidity}</div>
              <div>Maximum Temperature : {weatherInfo.tempMax}&deg;C</div>
              <div>Minimum Temperature : {weatherInfo.tempMin}&deg;C</div>
              <div>wind Degree : {weatherInfo.windDeg}&deg;C</div>
              <div>wind Speed : {weatherInfo.windSpeed}</div>
              <p>
                The weather can be described as <i>{weatherInfo.weather}</i> and
                feels like {weatherInfo.feels_like}&deg;C
              </p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
