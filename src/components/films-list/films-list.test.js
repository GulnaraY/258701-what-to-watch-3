import React from 'react';
import rerender from 'react-test-renderer';
import FilmsList from './films-list.jsx';

const titles = [`One`, `Two`, `Tree`, `Four`, `Five`, `Six`, `Seven`, `Eight`];

const films = new Array(8).fill(``).map((film, index) => ({
  title: titles[index],
  picture: titles[index] + `jpg`,
  id: index + Date.now(),
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
}));

const activeGenre = `All genres`;

it(`Should films list be rendered`, () => {
  const tree = rerender
  .create(
      <FilmsList
        movies={films}
        onTitleClick={()=>{}}
        onCardHover={()=>{}}
        activeGenre={activeGenre}
        quantity={8}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
