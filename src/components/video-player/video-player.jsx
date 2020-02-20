import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._video = null;
    this.state = {
      process: null,
      isLoading: true,
      isPlaying: props.isPlaying,
      isAutoplay: true,
      isMute: props.isMute,
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
    const {src, poster, onVideoUnhover} = this.props;
    const video = <video
      width ={270} height ={175}
      autoPlay={this.state.isAutoplay}
      muted={this.state.isMute}
      poster={`img/${poster}`}
      onMouseOut={onVideoUnhover}
    >
      <source src = {src} type="video/mp4" />
    </video>;
    this._video = document.createElement(`video`);
    return video;
  }

  componentDidUpdate() {
    if (this.state.isPlaying) {
      this._video.play();
    } else {
      this._video.pause();
    }
  }

}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onVideoUnhover: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMute: PropTypes.bool.isRequired,
};
export default VideoPlayer;
