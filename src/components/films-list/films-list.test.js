import React from 'react';
import rerender from 'react-test-renderer';
import {FilmsList} from './films-list.jsx';
import {Provider} from 'react-redux';
import configurationStore from 'redux-mock-store';

const mockStore = configurationStore([]);

const titles = [`One`, `Two`, `Tree`, `Four`, `Five`, `Six`, `Seven`, `Eight`];

const films = new Array(8).fill(``).map((film, index) => ({
  title: titles[index],
  picture: titles[index] + `jpg`,
  id: index + Date.now(),
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
}));

const activeGenre = `All genres`;

it(`Should films list be rendered`, () => {
  const store = mockStore({
    activeMovie: 8,
  });
  const tree = rerender
  .create(
      <Provider store={store}>
        <FilmsList
          movies={films}
          onTitleClick={()=>{}}
          onCardHover={()=>{}}
          activeGenre={activeGenre}
          quantity={8}
          activeMovie={store.activeMovie}
          onFilmCardMouseEnter={() => {}}
          onFilmCardMouseLeave={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
