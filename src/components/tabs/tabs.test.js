import React from 'react';
import rerender from 'react-test-renderer';
import Tabs from './tabs.jsx';

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

it(`Should render Tabs`, () => {
  const {rating, ratingAmount, description, director, actors} = filmDetails;
  const {genre, release, runTime, reviews} = filmDetails;
  const tree = rerender.create(
      <Tabs
        rating={rating}
        ratingAmount={ratingAmount}
        description={description}
        director={director}
        actors={actors}
        genre={genre}
        release={release}
        runTime={runTime}
        reviews={reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
