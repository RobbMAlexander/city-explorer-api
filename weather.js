'use strict';

const axios = require('axios');

class WeatherDisplay {
  constructor(day) {
    this.date = day.valid_date;
    this.dayHigh = day.high_temp;
    this.dayLow = day.low_temp;
    this.weatherDescription = day.weather.description;
  }
}

async function getWeather(req, res) {
  let lat = req.query.lat;
  let lon = req.query.lon;

  let url = `https://api.weatherbit.io/v1.0/forecast/daily`;

  let parameters = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    lat: lat,
    lon: lon,
    units: 'I',
  };

  // let receivedWeatherAPI = await axios.get(url);

  axios.get(url, { parameters })
    .then((receivedWeatherAPI) => {
      (receivedWeatherAPI.data.data.map(day => new WeatherDisplay(day)))
        .then(groomedWeatherData => res.send(groomedWeatherData))
        .catch(err => console.error(err));
    });
}

module.exports = getWeather;
