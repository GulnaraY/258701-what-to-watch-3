
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';

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
    />,
    document.querySelector(`#root`)
);
