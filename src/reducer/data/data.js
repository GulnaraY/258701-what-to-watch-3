import {extend} from '../../utils.js';

const initialState = {
  movies: [],
  promoMovie: {},
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
};

const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  loadPromoMovie: (promoMovie) => {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: promoMovie,
    };
  }
};

const dataAdapter = (rowData) => ({
  title: rowData.name,
  picture: rowData[`preview_image`],
  poster: rowData[`poster_image`],
  id: rowData.id,
  genre: rowData.genre,
  release: rowData.released,
  backgroundImage: rowData[`background_image`],
  backgroundColor: rowData[`background_color`],
  rating: rowData.rating,
  ratingAmount: rowData[`scores_count`],
  description: rowData.description,
  director: rowData.director,
  actors: rowData.starring,
  runTime: rowData[`run_time`],
  reviews: [],
  isFavorite: rowData[`is_favirite`],
  video: rowData[`preview_video_link`],
  fullScreenVideo: rowData[`video_link`],
});

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.loadMovies(response.data.map((rowData)=> dataAdapter(rowData))));
    });
  },
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.loadPromoMovie(dataAdapter(response.data)));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, Operation, ActionCreator};
