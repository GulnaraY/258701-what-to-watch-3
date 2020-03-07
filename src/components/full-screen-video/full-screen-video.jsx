import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const FULL_SCREEN_SIZE = 100 + `%`;
const VIDEO_SHOULD_PAUSE = true;
const VIDEO_IS_MUTE = false;

class FullScreenVideo extends PureComponent {
  constructor(props) {
    super(props);

    this._wholeDuration = null;

    this.state = {
      isVideoPlaying: true,
      progress: null,
    };
  }

  _handlePlayButtonClick() {
    this.setState((prevState) => ({
      isVideoPlaying: !prevState.isVideoPlaying,
    }));
  }

  _getVideoDuration(wholeDuration) {
    this._wholeDuration = wholeDuration;
  }

  _getCurrentDuration(currentDuration) {
    this.setState({
      progress: currentDuration,
    });
  }

  render() {
    const {isVideoPlaying} = this.state;
    const {onVideoExit, title, video, poster} = this.props;
    const lessDuration = this._wholeDuration - this.state.progress;
    const progressBar = this.state.progress * 100 / this._wholeDuration;
    return (
      <div className="player">
        <VideoPlayer
          isPlaying = {isVideoPlaying}
          src={video}
          poster={poster}
          width={FULL_SCREEN_SIZE}
          height={FULL_SCREEN_SIZE}
          pauseVideo={VIDEO_SHOULD_PAUSE}
          isMute={VIDEO_IS_MUTE}
          getVideoDuration={(duration) => this._getVideoDuration(duration)}
          getCurrentDuration={(currentDuration) => this._getCurrentDuration(currentDuration)}
        />

        <button
          onClick={onVideoExit}
          type="button" className="player__exit">Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progressBar} max="100"></progress>
              <div className="player__toggler" style={{left: `${progressBar}` + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{lessDuration}</div>
          </div>
  
          <div className="player__controls-row">
            <button
              onClick={() => this._handlePlayButtonClick()}
              type="button" className="player__play">
              {isVideoPlaying
                ? <React.Fragment>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#play"></use>
                  </svg>
                  <span>Pause</span>
                </React.Fragment>
                : <React.Fragment>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </React.Fragment>}
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
