
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';

const PromoMovieDetails = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE: 2014,
};

const moviesList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDom.render(
    <App
      title = {PromoMovieDetails.TITLE}
      genre = {PromoMovieDetails.GENRE}
      release = {PromoMovieDetails.RELEASE}
      movies = {moviesList}
    />,
    document.querySelector(`#root`)
);
