import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const filmDetails = {
  genre: `drame`,
  release: 1999,
  rating: 8,
  ratingAmount: 200,
  description: `One day in sumemer`,
  director: `Tim Cook`,
  actors: [`actress`, `actor`],
  runTime: 10,
  reviews: new Array(3).fill(``).map(() => (
    {
      author: `Tim Cook`,
      text: `hello`,
      rating: 2.0,
      dateTime: `10 26 2019`,
    }
  ))
};

it(`Tabs should works`, () => {
  const {genre, release, description, director, actors} = filmDetails;
  const {runTime, reviews, rating, ratingAmount} = filmDetails;
  const onTabsLinkClick = jest.fn();
  const tabs = mount(
      <Tabs
        rating={rating}
        ratingAmount={ratingAmount}
        description={description}
        director={director}
        actors={actors}
        genre={genre}
        release={release}
        runTime={runTime}
        reviews={reviews}
        onTabsLinkClick={onTabsLinkClick}
      />
  );

  const tabsLinks = tabs.find(`a.movie-nav__link`);
  tabsLinks.forEach((link) => link.simulate(`click`, {preventDefault() {}}));

  expect(onTabsLinkClick.mock.calls.length).toBe(3);
});
