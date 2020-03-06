import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const FULL_SCREEN_SIZE = 100 + `%`;
const VIDEO_SHOULD_PAUSE = true;
const VIDEO_IS_MUTE = false;

class FullScreenVideo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideoPlaying: false,
    };
  }

  _handlePlayButtonClick() {
    this.setState((prevState) => ({
      isVideoPlaying: !prevState.isVideoPlaying,
    }));
  }

  render() {
    const {isVideoPlaying} = this.state;
    const {onVideoExit, title, video, poster} = this.props;
    return (
      <div className="player">
        {/* <video src="#" className="player__video" poster="img/player-poster.jpg"></video> */}
        <VideoPlayer
          isPlaying = {isVideoPlaying}
          src={video}
          poster={poster}
          width={FULL_SCREEN_SIZE}
          height={FULL_SCREEN_SIZE}
          pauseVideo={VIDEO_SHOULD_PAUSE}
          isMute={VIDEO_IS_MUTE}
        />

        <button
          onClick={onVideoExit}
          type="button" className="player__exit">Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: 30 + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>
  
          <div className="player__controls-row">
            <button
              onClick={() => this._handlePlayButtonClick()}
              type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{title}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

FullScreenVideo.propTypes = {
  onVideoExit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default FullScreenVideo;
