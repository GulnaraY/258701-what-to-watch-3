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
  VIDEO: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  POSTER: `moonrise-kingdom.jpg`,
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
        promoVideo = {PromoMovieDetails.VIDEO}
        promoPoster = {PromoMovieDetails.POSTER}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
