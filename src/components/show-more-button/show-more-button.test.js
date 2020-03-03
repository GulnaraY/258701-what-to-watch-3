import React from 'react';
import rerender from 'react-test-renderer';
import ShowMoreButton from './show-more-button.jsx';

it(`Should render ShowMore`, () => {
  const tree = rerender
  .create(
      <ShowMoreButton
        onShowMoreButtonClick={()=> {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
