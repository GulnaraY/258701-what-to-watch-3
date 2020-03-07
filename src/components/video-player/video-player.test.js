import React from 'react';
import rerender from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';
const src = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const poster = `poster`;

it(`Should render VideoPlayer`, () => {
  const tree = rerender.create(
      <VideoPlayer
        src={src}
        poster={poster}
        isPlaying={true}
        isMute={true}
        pauseVideo={true}
        width={``}
        heighth={``}
        getCurrentDuration={()=>{}}
        getVideoDuration={()=>{}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
