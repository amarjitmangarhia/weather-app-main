import React, { useState } from "react";
import Card from "./Card";
import Render from "./Render";

const Container = (props) => {
  const [weatherData, setWeatherData] = useState([]);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [cityName, setCityName] = useState("");

  const onChangeHandler = (e) => {
    setCityName(e.target.value);
  };

  const onClickHandler = async () => {
    if (cityName === "") {
      setError(true);
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=7f9615fa6c62a35d6e5b0fb4afa2d465`;
    console.log(url)
    const response = await fetch(url);
    if (!response.ok) {
      setError(true);
      setShow(false);
      console.log(response.statusText);
      return;
    }
    const data = await response.json();
    setWeatherData({
      name: data.name,
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      clouds: data.weather[0].main,
      country: data.sys.country,
      wind: data.wind.speed,
      humidity: data.main.humidity,
      airPressure: data.main.pressure,
      latitude: data.coord.lat,
      longitude: data.coord.lon,
    });
    setShow(true);
    setCityName("");
  };

  let content = "";

  if (show) {
    content = (
      <Card
        name={weatherData.name}
        country={weatherData.country}
        clouds={weatherData.clouds}
        humidity={weatherData.humidity}
        airPressure={weatherData.airPressure}
        wind={weatherData.wind}
        temp={weatherData.temp}
        feelsLike={weatherData.feelsLike}
      />
    );
  } else if (error) {
    content = <p>Not Found Any City!</p>;
  } else {
    content = <p> Try Entering City</p>;
  }

  return (
    <div className="container">
      <Render
        onChangeHandler={onChangeHandler}
        onClickHandler={onClickHandler}
        content={content}
      />
    </div>
  );
};

export default Container;
