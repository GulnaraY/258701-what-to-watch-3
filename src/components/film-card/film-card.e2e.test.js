import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card.jsx';

const movie = {
  title: `Summer`,
  picture: `summer.jpg`,
  id: Date.now(),
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Should VideoPlayer play and pause`, () => {
  it(`Should VideoPlayer pause`, () => {
    const filmCard = shallow(
        <FilmCard
          filmInfo={movie}
          onTitleClick={()=>{}}
          onFilmCardMouseLeave={()=>{}}
          onFilmCardMouseEnter={()=>{}}
          isPlaying={true}
        />
    );

    const movieCard = filmCard.find(`.small-movie-card`);
    movieCard.simulate(`mouseLeave`);

    expect(filmCard.prop(`isPlaying`)).toEqual(false);
  });

  it(`Should VideoPlayer play`, () => {
    const filmCard = shallow(
        <FilmCard
          filmInfo={movie}
          onTitleClick={()=>{}}
          onCardHover={()=>{}}
          onFilmCardMouseEnter={()=>{}}
          onFilmCardMouseLeave={()=>{}}
          isPlaying={false}
        />
    );

    const movieCard = filmCard.find(`.small-movie-card`);
    jest.useFakeTimers();
    movieCard.simulate(`mouseEnter`);
    jest.advanceTimersByTime(1001);
    filmCard.update();

    expect(filmCard.prop(`isPlaying`)).toEqual(true);
  });
});
