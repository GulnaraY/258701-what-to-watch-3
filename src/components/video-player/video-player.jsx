import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      process: null,
      isLoading: true,
      isPlaying: props.isPlaying,
      isMute: props.isMute,
    };
  }
  componentDidMount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    video.onplay = () => this.setState({
      isPlaying: true,
    });

    video.onpause = () => this.setState({
      isPlaying: false,
    });

    video.ontimeupdate = () => this.setState({
      progress: video.currentTime,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
  }

  render() {
    const {src, poster, width, height} = this.props;
    const video = <video
      width ={width} height ={height}
      muted={this.state.isMute}
      poster={`img/${poster}`}
      ref={this._videoRef}
    >
      <source src = {src} type="video/mp4" />
    </video>;

    return video;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {pauseVideo} = this.props;

    if (this.props.isPlaying) {
      video.play();
    } else if (pauseVideo) {
      video.pause();
    } else {
      video.load();
    }
  }

}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
export default VideoPlayer;
