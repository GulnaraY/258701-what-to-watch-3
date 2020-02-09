import React from 'react';
import rerender from 'react-test-renderer';
import Main from './main.jsx';

const PromoMovieDetails = {
  TITLE: `Friends`,
  GENRE: `Comedy`,
  RELEASE: 2004,
};

const moviesList = [`Friends`, `Revolutionary Road`, `Joy`];

it(`render Main`, () => {
  const tree = rerender
    .create(
        <Main
          title={PromoMovieDetails.TITLE}
          genre={PromoMovieDetails.GENRE}
          release={PromoMovieDetails.RELEASE}
          movies={moviesList}
          onTitleClick={() => {}}
        />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
