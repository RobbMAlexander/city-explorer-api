'use strict';

const axios = require('axios');

class MovieDisplay {
  constructor(movie) {
    this.title = movie.title;
    this.description = movie.overview;
    this.src = movie.poster_path;
  }
}

async function getMovies(req, res) {

  let cityQuery = req.query.query;

  // let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${cityQuery}&page=1&include_adult=false`;

  let url = `https://api.themoviedb.org/3/search/movie`;

  let parameters = {
    key: process.env.REACT_APP_MOVIE_API_KEY,
    language: 'en-US',
    query: cityQuery,
    page: 1,
    include_adult: false,
  };

  // let receivedMoviesAPI = await axios.get(url);

  axios.get(url, { parameters })
    .then((receivedMoviesAPI) => {
      (receivedMoviesAPI.data.results.map(movie => new MovieDisplay(movie)))
        .then(groomedMovieData => res.send(groomedMovieData))
        .catch(err => console.error(err));
    });
}
module.exports = getMovies;
