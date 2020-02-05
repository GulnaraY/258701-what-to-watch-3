import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.jsx';

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
    />,
    document.querySelector(`#root`)
);
