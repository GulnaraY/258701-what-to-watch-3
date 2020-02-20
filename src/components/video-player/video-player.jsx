import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._video = null;
    this.state = {
      process: null,
      isLoading: true,
      isPlaying: true,
      isAutoplay: true,
      isMute: true,
    };
  }
  componentDidMount() {

    this._video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    this._video.onplay = () => this.setState({
      isPlaying: true,
    });

    this._video.onpause = () => this.setState({
      isPlaying: false,
    });

    this._video.ontimeupdate = () => this.setState({
      progress: this._audio.currentTime,
    });
  }

  componentWillUnmount() {
    this._video.oncanplaythrough = null;
    this._video.onplay = null;
    this._video.onpause = null;
    this._video.ontimeupdate = null;
    this._video.src = null;
    this._video = null;
  }

  render() {
    const {src, poster, onVideoUnHover} = this.props;
    const video = <video
      width ={270} height ={175}
      autoPlay={this.state.isAutoplay}
      muted={this.state.isMute}
      poster={`img/${poster}`}
      onMouseOut={onVideoUnHover}
    >
      <source src = {src} type="video/mp4" />
    </video>;
    this._video = document.createElement(`video`);
    return video;
  }

}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onVideoUnHover: PropTypes.func.isRequired,
};
export default VideoPlayer;
