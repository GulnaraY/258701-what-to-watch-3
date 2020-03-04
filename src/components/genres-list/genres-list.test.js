import React from 'react';
import rerender from 'react-test-renderer';
import GenresList from './genres-list.jsx';

const titles = [`One`, `Two`, `Tree`, `Four`, `Five`, `Six`, `Seven`, `Eight`];

const films = new Array(8).fill(``).map((film, index) => ({
  title: titles[index],
  genre: `comedy`,
  picture: titles[index] + `jpg`,
  id: index + Date.now(),
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
}));

const activeGenre = `All genres`;

it(`Should render GenresList`, () => {
  const tree = rerender.create(
      <GenresList
        films={films}
        onGenreClick={()=> {}}
        activeGenre={activeGenre}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
