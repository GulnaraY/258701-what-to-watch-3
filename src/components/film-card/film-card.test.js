import React from 'react';
import rerender from 'react-test-renderer';
import FilmCard from './film-card.jsx';

const movie = {
  title: `Summer`,
  picture: `summer.jpg`,
  id: Date.now(),
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`Should FilmCard be rendered correctly`, () => {
  const tree = rerender
  .create(
      <FilmCard
        filmInfo={movie}
        onTitleClick={()=>{}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
