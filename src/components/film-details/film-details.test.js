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
  runTime: `1h 30m`,
  reviews: new Array(3).fill(``).map(() => (
    {
      author: `Tim Cook`,
      text: `hello`,
      rating: 2.0,
      dateTime: `10 26 2019`,
    }
  )),
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
          reviews={filmDetails.reviews}
        />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
