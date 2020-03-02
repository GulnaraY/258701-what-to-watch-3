import React from 'react';
import Enzyne, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenresList from './genres-list.jsx';

Enzyne.configure({
  adapter: new Adapter(),
});

const titles = [`One`, `Two`, `Tree`, `Four`, `Five`, `Six`, `Seven`, `Eight`];

const films = new Array(8).fill(``).map((film, index) => ({
  title: titles[index],
  picture: titles[index] + `jpg`,
  id: index + Date.now(),
  genre: `comedy`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
}));

const activeGenre = `All genres`;

it(`Should genres list's buttons be pressed`, () => {
  const onGenreClick = jest.fn();

  const genresList = shallow(
      <GenresList
        onGenreClick={onGenreClick}
        films={films}
        activeGenre={activeGenre}
      />
  );

  const genresLinks = genresList.find(`a.catalog__genres-link`);
  genresLinks.forEach((link) => link.simulate(`click`, {preventDefault() {}, target: {text: `comedy`}}));

  expect(onGenreClick.mock.calls.length).toBe(2);
});
