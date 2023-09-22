import React from "react";

const Card = (props) => {
  let temperature = props.temp - 273.15;
  let feelsLikeTemperature = props.feelsLike - 273.15;
  let date = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[date.getMonth()];

  const [day] = [date.getDate()];
  const [year] = [date.getFullYear()];
  return (
    <div className="card">
      <div className="nav">
        {props.name}, {props.country}
        <div className="date">
          {day}, {month} {year}
        </div>
      </div>
      <div className="card-container">
        <div className="card-main">
          <div className="card-items">
            <div className="item-name">Temp</div>
            <div className="item-data">{temperature.toFixed()}°</div>
          </div>
          <div className="card-items">
            <div className="item-name">Feels Like</div>
            <div className="item-data">{feelsLikeTemperature.toFixed()}°</div>
          </div>
          <div className="card-items">
            <div className="item-name">Sky</div>
            <div className="item-data">{props.clouds}</div>
          </div>
          <div className="card-items">
            <div className="item-name">Humadity</div>
            <div className="item-data">{props.humidity}</div>
          </div>
          <div className="card-items">
            <div className="item-name">Air Pressure</div>
            <div className="item-data">{props.airPressure}</div>
          </div>
          <div className="card-items">
            <div className="item-name">Wind</div>
            <div className="item-data">
              {props.wind * (1.609).toFixed()} km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
