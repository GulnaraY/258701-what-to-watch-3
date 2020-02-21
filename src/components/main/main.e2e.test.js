import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = mount(
      <Main
        title={PromoMovieDetails.TITLE}
        genre={PromoMovieDetails.GENRE}
        release={PromoMovieDetails.RELEASE}
        movies={moviesList}
        onTitleClick={onTitleClick}
        onCardHover={()=>{}}
      />
  );

  const titleLink = main.find(`a.small-movie-card__link`);

  titleLink.forEach((title) => title.simulate(`click`, {preventDefault() {}}));

  expect(onTitleClick.mock.calls.length).toBe(moviesList.length);
});
