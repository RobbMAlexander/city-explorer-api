'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
// const axios = require('axios');
const PORT = process.env.PORT || 3001;
// const weatherData = require('./data/weather.json');

const getWeather = require('./weather');
const getMovies = require('./movies');

// note: add 'img' before imported  path

app.get('/', (req, res) => {
  res.send('Greeting check for root URL');
});

// let url = `https://api.weatherbit.io/v1.0/forecast/daily?key=${process.env.REACT_APP_WEATHER_API_KEY}&lat=${lat}&lon=${lon}&units=I&days=3`;

// note: temporary 'days=3' query for shorter terminal output during development





// app.get('/movies', async (req, res) => {

//   let cityQuery = req.query.query;

//   // let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${cityQuery}&page=1&include_adult=false`;

//   let url = `https://api.themoviedb.org/3/search/movie`;

//   let parameters = {
//     key: process.env.REACT_APP_MOVIE_API_KEY,
//     language: 'en-US',
//     query: cityQuery,
//     page: 1,
//     include_adult: false,
//   };

//   // let receivedMoviesAPI = await axios.get(url);

//   // axios.get(url, { parameters })
//   //   .then((receivedMoviesAPI) => {
//   //     (receivedMoviesAPI.data.results.map(movie => new MovieDisplay(movie)))
//   //       .then(groomedMovieData => res.send(groomedMovieData))
//   //       .catch(err=> console.error(err));
//   //   });
// });

app.get('/weather', getWeather);

app.get('/movies', getMovies);

// app.get('/', (req, res) => {
//   res.send('Greeting check for root URL');
// });

app.get('*', (req, res) => {
  res.send('Oops! Try a valid page address.');
});


app.listen(PORT, () => console.log(`listen check for port ${PORT}`));

