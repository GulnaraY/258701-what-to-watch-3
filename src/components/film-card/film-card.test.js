import React from 'react';
import rerender from 'react-test-renderer';
import FilmCard from './film-card.jsx';

const movie = {
  title: `Summer`,
  picture: `summer.jpg`,
  id: Date.now(),
};

it(`Should FilmCard be rendered correctly`, () => {
  const tree = rerender
  .create(
      <FilmCard
        filmInfo={movie}
        onTitleClick={()=>{}}
        onCardHover={()=>{}}
        onCardUnhover={()=>{}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
