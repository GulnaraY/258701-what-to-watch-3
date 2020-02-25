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
      isMute: true,
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
    const {src, poster} = this.props;
    const video = <video
      width ={270} height ={175}
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

    if (this.props.isPlaying) {
      video.play();
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
