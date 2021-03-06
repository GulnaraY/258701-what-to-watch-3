import React from 'react';
import rerender from 'react-test-renderer';
import {App} from './app.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

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
  genre: `drama`,
  release: 1999,
  poster: `summer.jpg`,
  rating: 8,
  ratingAmount: 200,
  description: `One day in sumemer`,
  director: `Tim Cook`,
  actors: [`actress`, `actor`],
  runTime: `1h 30m`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
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
    movies: moviesList,
    activeGenre: `All genres`,
    moviesToShow: 8,
    activeMovie: 0,
  });
  const tree = rerender
    .create(
        <Provider store={store}>
          <App
            promoTitle={PromoMovieDetails.TITLE}
            promoGenre={PromoMovieDetails.GENRE}
            promoRelease={PromoMovieDetails.RELEASE}
            promoVideo={PromoMovieDetails.VIDEO}
            promoPoster={PromoMovieDetails.POSTER}
            onTabsLinkClick={()=>{}}
            moviesToShow={mockStore.moviesToShow}
            activeMovie={store.activeMovie}
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
