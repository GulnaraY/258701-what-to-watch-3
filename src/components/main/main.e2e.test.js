import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const PromoMovieDetails = {
  TITLE: `Friends`,
  GENRE: `Comedy`,
  RELEASE: 2004,
};

const moviesList = [`Friends`, `Revolutionary Road`, `Joy`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        title={PromoMovieDetails.TITLE}
        genre={PromoMovieDetails.GENRE}
        release={PromoMovieDetails.RELEASE}
        movies={moviesList}
        onTitleClick={onTitleClick}
      />
  );

  const titleLink = main.find(`a.small-movie-card__link`);

  titleLink.forEach((title) => title.props().onClick());

  expect(onTitleClick.mock.calls.length).toBe(moviesList.length);
});
