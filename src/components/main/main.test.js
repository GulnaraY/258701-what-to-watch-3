import React from 'react';
import rerender from 'react-test-renderer';
import {Main} from './main.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

const PromoMovieDetails = {
  TITLE: `Friends`,
  GENRE: `Comedy`,
  RELEASE: 2004,
};

const titles = [`One`, `Two`, `Tree`, `Four`, `Five`, `Six`, `Seven`, `Eight`];

const moviesList = new Array(8).fill(``).map((film, index) => ({
  title: titles[index],
  picture: titles[index] + `jpg`,
  id: index + Date.now(),
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
}));

it(`render Main`, () => {
  const store = mockStore({
    movies: moviesList,
    activeGenre: `All genres`,
    moviesToShow: 8,
  });
  const tree = rerender
    .create(
        <Provider store={store}>
          <Main
            title={PromoMovieDetails.TITLE}
            genre={PromoMovieDetails.GENRE}
            release={PromoMovieDetails.RELEASE}
            movies={moviesList}
            onTitleClick={() => {}}
            onGenreClick={() => {}}
            activeGenre={`All genres`}
            moviesToShow={8}
            onShowMoreButtonClick={()=>{}}
          />
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
