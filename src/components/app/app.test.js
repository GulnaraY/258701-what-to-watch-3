import React from 'react';
import rerender from 'react-test-renderer';
import App from './app.jsx';

const PromoMovieDetails = {
  TITLE: `Friends`,
  GENRE: `Comedy`,
  RELEASE: 2004,
};

const moviesList = [`Friends`, `Revolutionary Road`, `Joy`];


it(`render App`, () => {
  const tree = rerender
    .create(
        <App
          title={PromoMovieDetails.TITLE}
          genre={PromoMovieDetails.GENRE}
          release={PromoMovieDetails.RELEASE}
          movies={moviesList}
        />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
