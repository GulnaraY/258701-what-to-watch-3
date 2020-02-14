import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card.jsx';

const movie = {
  title: `Summer`,
  picture: `summer.jpg`,
  id: Date.now(),
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should be hovered`, () => {
  const onCardHover = jest.fn();

  const filmCard = shallow(
      <FilmCard
        filmInfo={movie}
        onTitleClick={()=>{}}
        onCardHover={onCardHover}
      />
  );
  filmCard.props().onMouseOver();

  expect(onCardHover.mock.calls.length).toBe(1);
});
