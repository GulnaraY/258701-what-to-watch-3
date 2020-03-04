import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {App} from './components/app/app.jsx';
import {reducer} from './reducer.js';

const PromoMovieDetails = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE: 2014,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDom.render(
    <Provider store={store}>
      <App
        promoTitle = {PromoMovieDetails.TITLE}
        promoGenre = {PromoMovieDetails.GENRE}
        promoRelease = {PromoMovieDetails.RELEASE}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
