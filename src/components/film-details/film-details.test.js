import React from 'react';
import rerender from 'react-test-renderer';
import FilmDetails from './film-details.jsx';
import {Provider} from 'react-redux';
import configurationStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configurationStore([]);

const filmDetails = {
  title: `Summer`,
  genre: `drame`,
  release: 1999,
  poster: `summer.jpg`,
  picture: `summer.jpg`,
  rating: 8,
  ratingAmount: 200,
  description: `One day in sumemer`,
  director: `Tim Cook`,
  actors: [`actress`, `actor`],
  runTime: 30,
  reviews: new Array(3).fill(``).map(() => (
    {
      author: `Tim Cook`,
      text: `hello`,
      rating: 2.0,
      dateTime: `10 26 2019`,
    }
  ))
};

const similarMovies = new Array(4).fill(``).map((film, index) => ({
  title: `title`,
  picture: `title.jpg`,
  id: index + Date.now(),
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
}));

it(`Should render FilmDetails`, () => {
  const store = mockStore({
    [NameSpace.APPLICATION]: {
      activeMovie: 8,
    }
  });
  const tree = rerender
    .create(
        <Provider store={store}>
          <FilmDetails
            title={filmDetails.title}
            genre={filmDetails.genre}
            release={filmDetails.release}
            poster={filmDetails.poster}
            picture={filmDetails.picture}
            rating={filmDetails.rating}
            ratingAmount={filmDetails.ratingAmount}
            description={filmDetails.description}
            director={filmDetails.director}
            actors={filmDetails.actors}
            reviews={filmDetails.reviews}
            runTime={filmDetails.runTime}
            movies={similarMovies}
            onTitleClick={()=>{}}
            currentIndex={0}
            video={``}
            backgroundImage={``}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();
  expect(tree).toMatchSnapshot();
});
