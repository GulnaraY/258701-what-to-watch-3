import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideoPlaying: false,
      hoverTimeOut: null,
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  _handleMouseEnter() {
    this.setState({
      hoverTimeOut: setTimeout(() => this.setState({
        isVideoPlaying: true,
      }), 1000),
    });
  }

  _handleMouseLeave() {
    this._clearHoverTimeout();
    this.setState({
      isVideoPlaying: false,
    });
  }

  _clearHoverTimeout() {
    clearTimeout(this.state.hoverTimeOut);
    this.setState({
      hoverTimeOut: null,
    });
  }

  render() {
    const {filmInfo, onTitleClick, onCardHover} = this.props;
    const {title, picture, id, video} = filmInfo;
    const {isVideoPlaying} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onCardHover(id);
        }}

        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      >
        <div className="small-movie-card__image"
          onClick = {() => {
            this._clearHoverTimeout();
            onTitleClick(id);
          }}
        >
          <VideoPlayer
            src={video}
            poster={picture}
            isPlaying={isVideoPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            onClick = {(evt) => {
              evt.preventDefault();
              this._clearHoverTimeout();
              onTitleClick(id);
            }}
            className="small-movie-card__link"
            href="movie-page.html">{title}
          </a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  filmInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    video: PropTypes.string.isRequired,
  }),
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default FilmCard;
