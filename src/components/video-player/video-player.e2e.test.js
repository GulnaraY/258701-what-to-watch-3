import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const src = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const poster = `poster`;

describe(`Play and pause should be realized`, () => {
  it(`VideoPlayer should play video`, () => {
    const videoPlayer = shallow(
        <VideoPlayer
          src={src}
          poster={poster}
          onVideoUnhover={()=>{}}
          isPlaying={true}
          isMute={true}
        />
    );

    expect(videoPlayer.state().isPlaying).toEqual(true);
  });
  it(`VideoPlayer should pause video`, () => {
    const videoPlayer = shallow(
        <VideoPlayer
          src={src}
          poster={poster}
          onVideoUnhover={()=>{}}
          isPlaying={false}
          isMute={true}
        />
    );

    expect(videoPlayer.state().isPlaying).toEqual(false);
  });
});
