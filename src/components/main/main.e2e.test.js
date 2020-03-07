import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './main.jsx';
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
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
}));

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();
  const store = mockStore({
    movies: moviesList,
    activeGenre: `All genres`,
    moviesToShow: 8,
  });

  const main = mount(
      <Provider store={store}>
        <Main
          title={PromoMovieDetails.TITLE}
          genre={PromoMovieDetails.GENRE}
          release={PromoMovieDetails.RELEASE}
          movies={moviesList}
          onTitleClick={onTitleClick}
          onGenreClick={() => {}}
          activeGenre={`All genres`}
          moviesToShow={8}
          onShowMoreButtonClick={()=>{}}
          video={PromoMovieDetails.VIDEO}
          poster={PromoMovieDetails.POSTER}
        />
      </Provider>
  );

  const titleLink = main.find(`a.small-movie-card__link`);

  titleLink.forEach((title) => title.simulate(`click`, {preventDefault() {}}));

  expect(onTitleClick.mock.calls.length).toBe(moviesList.length);
});
