import React from 'react';
import rerender from 'react-test-renderer';
import {Main} from './main.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const PromoMovieDetails = {
  TITLE: `Friends`,
  GENRE: `Comedy`,
  RELEASE: 2004,
  VIDEO: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  POSTER: `moonrise-kingdom.jpg`,
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
    [NameSpace.APPLICATION]: {
      activeGenre: `All genres`,
      moviesToShow: 8,
      activeMovie: 0,
    },
    [NameSpace.DATA]: {
      movies: moviesList,
    }
  });
  const tree = rerender
    .create(
        <Provider store={store}>
          <Main
            title={PromoMovieDetails.TITLE}
            genre={PromoMovieDetails.GENRE}
            release={PromoMovieDetails.RELEASE}
            video={PromoMovieDetails.VIDEO}
            poster={PromoMovieDetails.POSTER}
            movies={moviesList}
            onTitleClick={() => {}}
            onGenreClick={() => {}}
            activeGenre={`All genres`}
            moviesToShow={8}
            onShowMoreButtonClick={()=>{}}
            activeMovie={0}
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
