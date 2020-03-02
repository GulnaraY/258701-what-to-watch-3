import React from 'react';
import rerender from 'react-test-renderer';
import Reviews from './reviews.jsx';

const reviews = new Array(3).fill(``).map(() => (
  {
    author: `Tim Cook`,
    text: `hello`,
    rating: 2.0,
    dateTime: `10 26 2019`,
  }
));

it(`Should render Reviews`, () => {
  const tree = rerender.create(
      <Reviews
        reviews={reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
