import React from 'react';
import rerender from 'react-test-renderer';
import {App} from './app.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const promoMovie = {
  title: `Friends`,
  genre: `Comedy`,
  release: 2004,
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  poster: `moonrise-kingdom.jpg`,
};

const titles = [`One`, `Two`, `Tree`, `Four`, `Five`, `Six`, `Seven`, `Eight`];

const moviesList = new Array(8).fill(``).map((film, index) => ({
  title: titles[index],
  picture: titles[index] + `jpg`,
  id: index + Date.now(),
  genre: `drama`,
  release: 1999,
  poster: `summer.jpg`,
  rating: 8,
  ratingAmount: 200,
  description: `One day in sumemer`,
  director: `Tim Cook`,
  actors: [`actress`, `actor`],
  runTime: 10,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  fullScreenVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  backgroundImage: ``,
  reviews: new Array(3).fill(``).map(() => (
    {
      author: `Tim Cook`,
      text: `hello`,
      rating: 2.0,
      dateTime: `10 26 2019`,
    }
  )),
}));

it(`render App`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      movies: moviesList,
      promoMovie: {},
    },
    [NameSpace.APPLICATION]: {
      activeMovie: 0,
      activeGenre: `All genres`,
    }
  });

  const tree = rerender
    .create(
        <Provider store={store}>
          <App
            promoMovie={{}}
            onTabsLinkClick={()=>{}}
            moviesToShow={8}
            activeMovie={store.activeMovie}
            quantity={8}
            movies={moviesList}
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
