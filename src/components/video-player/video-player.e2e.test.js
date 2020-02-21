import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from '../film-card/film-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const movie = {
  title: `Summer`,
  picture: `summer.jpg`,
  id: Date.now(),
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

describe(`Should VideoPlayer play and pause`, () => {
  it(`Should VideoPlayer pause`, () => {
    const filmCard = shallow(
        <FilmCard
          filmInfo={movie}
          onTitleClick={()=>{}}
          onCardHover={()=>{}}
        />
    );

    const movieCard = filmCard.find(`.small-movie-card`);
    movieCard.simulate(`mouseLeave`);

    expect(filmCard.state(`isVideoPlaying`)).toEqual(false);
  });

  it(`Should VideoPlayer play`, () => {
    const filmCard = shallow(
        <FilmCard
          filmInfo={movie}
          onTitleClick={()=>{}}
          onCardHover={()=>{}}
        />
    );

    const movieCard = filmCard.find(`.small-movie-card`);
    movieCard.simulate(`mouseEnter`);

    expect(filmCard.state(`isVideoPlaying`)).toEqual(true);
  });
});
