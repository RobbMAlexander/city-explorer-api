'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3003;
const weatherData = require('./data/weather.json');

app.get('/', (req, res) => {
  res.send('Greeting check for root URL');
});

app.get('/weather', (req, res) => {
  let city = req.query;
  res.send(weatherData.city.city_name);
});

// app.get('/', (req, res) => {
//   res.send('Greeting check for root URL');
// });

// app.get('/', (req, res) => {
//   res.send('Greeting check for root URL');
// });

app.listen(PORT, () => console.log(`listen check for port ${PORT}`));

