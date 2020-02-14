import React from 'react';
import rerender from 'react-test-renderer';
import FilmDetails from './film-details.jsx';

const filmDetails = {
  title: `Summer`,
  genre: `drame`,
  release: 1999,
  poster: `summer.jpg`,
  picture: `summer.jpg`,
  rating: 8,
  ratingAmount: 200,
  description: `One day in sumemer`,
  director: `Tim Cook`,
  actors: [`actress`, `actor`],
};

it(`Should render FilmDetails`, () => {
  const tree = rerender
    .create(
        <FilmDetails
          title={filmDetails.title}
          genre={filmDetails.genre}
          release={filmDetails.release}
          poster={filmDetails.poster}
          picture={filmDetails.picture}
          rating={filmDetails.rating}
          ratingAmount={filmDetails.ratingAmount}
          description={filmDetails.description}
          director={filmDetails.director}
          actors={filmDetails.actors}
        />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
