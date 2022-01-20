'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const axios = require('axios');
const PORT = process.env.PORT || 3001;
// const weatherData = require('./data/weather.json');

app.get('/', (req, res) => {
  res.send('Greeting check for root URL');
});

app.get('/weather', async (req, res) => {
  let lat = req.query.lat;
  let lon = req.query.lon;
  // placeholder filtering below

  // note: days=3 in query for shorter terminal output during build

  let url = `https://api.weatherbit.io/v1.0/forecast/daily?key=${process.env.REACT_APP_WEATHER_API_KEY}&lat=${lat}&lon=${lon}&units=I&days=3`;

  // let relevantWeatherData = weatherData.filter(city => city.property === relevantproperty)

  let displayedWeather = await axios.get(url);

  // data property identification logs (looking good so far)

  console.log(displayedWeather);
  console.log(displayedWeather.data);
  console.log(displayedWeather.data.city_name);
  console.log(displayedWeather.data.data[1].low_temp);
  console.log(displayedWeather.data.data[1].high_temp);
  console.log(displayedWeather.data.data[1].weather.description);
  console.log(req.query.lat);
  console.log(req.query.lon);

  //    let forecast = (data) => {


  //     const new WeatherDisplay (displayedWeather);
  //    }
  // }
  //    // res.send(weatherData.city.city_name);

  let groomedWeatherData = displayedWeather.data.data.map(day => new WeatherDisplay(day))

  res.send('Weather route test');
  // res.send(groomedWeatherData);
});


// class WeatherDisplay {
//   constructor(city) {
//     this.cityName = city.city_name;
//     this.dayOneHigh = city.data[1].
//       this.dayOneLow
//   }
// }






// class Movies {
//   constructor(movies){


//   }
// }

// movieDB API call -- needs proper queries!!

// app.get('/', (req, res) => {

//   let url = `https://api.weatherbit.io/v1.0/forecast/daily?key=${process.env.REACT_APP_MOVIE_API_KEY}&`;
// res.send('Greeting check for root URL');

// });

// app.get('/', (req, res) => {
//   res.send('Greeting check for root URL');
// });

app.get('*', (req, res) => {
  res.send('Oops! Try a valid page address.');
});



app.listen(PORT, () => console.log(`listen check for port ${PORT}`));

