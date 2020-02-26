import React from 'react';
import rerender from 'react-test-renderer';
import Details from './details.jsx';

const filmDetails = {
  genre: `drame`,
  release: 1999,
  director: `Tim Cook`,
  actors: [`actress`, `actor`],
  runTime: `1h 30m`,
};

it(`Should render Details`, () => {
  const {genre, release, runTime, director, actors} = filmDetails;
  const tree = rerender.create(
      <Details
        director={director}
        actors={actors}
        genre={genre}
        release={release}
        runTime={runTime}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
