
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';
import film from './mocks/film.js';

const PromoMovieDetails = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE: 2014,
};

ReactDom.render(
    <App
      title = {PromoMovieDetails.TITLE}
      genre = {PromoMovieDetails.GENRE}
      release = {PromoMovieDetails.RELEASE}
      movies = {films}
      filmDetails = {film}
    />,
    document.querySelector(`#root`)
);
