'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// added '.config' to require('dotenv')
require('dotenv').config;

const PORT = process.env.PORT || 3000;

// needed cors invocation

// trimmed unnecessary file extension
const weather = require('./modules/weather');

// added root URL
app.get('/', (request, response) => {
  response.send ('Server vitals check on root URL');
});

app.get('/weather', weatherHandler);

function weatherHandler(request, response) {
  const { lat, lon } = request.query;
  weather(lat, lon)
    .then(summaries => response.send(summaries))
    .catch((error) => {
      console.error(error);
      response.status(200).send('Sorry. Something went wrong!');
    });
}

// constructed PORT variable to replace individual port processes mid-page
app.listen(PORT, () => console.log(`Server up on ${PORT}`));
