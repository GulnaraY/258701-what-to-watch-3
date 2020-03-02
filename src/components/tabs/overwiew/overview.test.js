import React from 'react';
import rerender from 'react-test-renderer';
import Overview from './overview.jsx';

const filmDetails = {
  rating: 8,
  ratingAmount: 200,
  description: `One day in sumemer`,
  director: `Tim Cook`,
  actors: [`actress`, `actor`],
};

it(`Should render Overview`, () => {
  const {rating, ratingAmount, description, director, actors} = filmDetails;
  const tree = rerender.create(
      <Overview
        rating={rating}
        ratingAmount={ratingAmount}
        description={description}
        director={director}
        actors={actors}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
