import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation} from "./data.js";

const api = createAPI(() => {});

const movies = [
  {
    id: 1,
    title: `title1`,
    genre: `genre1`,
    picture: ``,
    release: 1999,
    rating: 10,
    ratingAmount: 10,
    poster: ``,
    description: ``,
    director: `Pol`,
    actors: [],
    video: ``,
    runTime: 10,
    reviews: ``,
  },
  {
    id: 2,
    title: `title2`,
    genre: `genre2`,
    picture: ``,
    release: 1999,
    rating: 10,
    ratingAmount: 10,
    poster: ``,
    description: ``,
    director: `Pol`,
    actors: [],
    video: ``,
    runTime: 10,
    reviews: ``,
  },

];


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    movies: [],
    promoMovie: {},
  });
});

it(`Reducer should update questions by load movies`, () => {
  expect(reducer({
    movies: [],
    promoMovie: {},
  }, {
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  })).toEqual({
    movies,
    promoMovie: {},
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [{
            "actors": undefined,
            "backgroundColor": undefined,
            "backgroundImage": undefined,
            "description": undefined,
            "director": undefined,
            "fullScreenVideo": undefined,
            "genre": undefined,
            "id": undefined,
            "isFavorite": undefined,
            "picture": undefined,
            "poster": undefined,
            "rating": undefined,
            "ratingAmount": undefined,
            "release": undefined,
            "reviews": [],
            "runTime": undefined,
            "title": undefined,
            "video": undefined}],
        });
      });
  });
});

