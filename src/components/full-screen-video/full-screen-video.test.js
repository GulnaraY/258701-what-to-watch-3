import React from 'react';
import rerender from 'react-test-renderer';
import FullScreenVideo from './full-screen-video.jsx';

const PromoMovieDetails = {
  TITLE: `Friends`,
  VIDEO: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  POSTER: `moonrise-kingdom.jpg`,
};


it(`Should render FullScreenVideo`, () => {
  const tree = rerender.create(
      <FullScreenVideo
        onVideoExit={()=>{}}
        title={PromoMovieDetails.TITLE}
        video={PromoMovieDetails.VIDEO}
        poster={PromoMovieDetails.POSTER}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
