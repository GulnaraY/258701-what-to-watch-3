import React from 'react';
import rerender from 'react-test-renderer';
import Main from './main.jsx';

const PromoMovieDetails = {
  TITLE: `Friends`,
  GENRE: `Comedy`,
  RELEASE: 2004,
};

const titles = [`One`, `Two`, `Tree`, `Four`, `Five`, `Six`, `Seven`, `Eight`];

const moviesList = new Array(8).fill(``).map((film, index) => ({
  title: titles[index],
  picture: titles[index] + `jpg`,
  id: index + Date.now(),
}));

it(`render Main`, () => {
  const tree = rerender
    .create(
        <Main
          title={PromoMovieDetails.TITLE}
          genre={PromoMovieDetails.GENRE}
          release={PromoMovieDetails.RELEASE}
          movies={moviesList}
          onTitleClick={() => {}}
          onCardHover={() => {}}
        />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
