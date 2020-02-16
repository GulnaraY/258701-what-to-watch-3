import React from 'react';
import rerender from 'react-test-renderer';
import App from './app.jsx';

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
  genre: `drama`,
  release: 1999,
  poster: `summer.jpg`,
  rating: 8,
  ratingAmount: 200,
  description: `One day in sumemer`,
  director: `Tim Cook`,
  actors: [`actress`, `actor`],
}));

it(`render App`, () => {
  const tree = rerender
    .create(
        <App
          promoTitle={PromoMovieDetails.TITLE}
          promoGenre={PromoMovieDetails.GENRE}
          promoRelease={PromoMovieDetails.RELEASE}
          movies={moviesList}
        />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
