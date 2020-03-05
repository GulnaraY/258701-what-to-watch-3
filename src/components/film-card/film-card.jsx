import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);
    this._timeout = null;
  }

  render() {
    const {filmInfo, onTitleClick, isPlaying, onFilmCardMouseEnter, onFilmCardMouseLeave} = this.props;
    const {title, picture, id, video} = filmInfo;
    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          this._timeout = setTimeout(onFilmCardMouseEnter, 1000, id);
        }}
        onMouseLeave={() => {
          clearTimeout(this._timeout);
          onFilmCardMouseLeave();
        }}
      >
        <div className="small-movie-card__image"
          onClick = {() => {
            clearTimeout(this._timeout);
            onTitleClick(id);
          }}
        >
          <VideoPlayer
            src={video}
            poster={picture}
            isPlaying={isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            onClick = {(evt) => {
              evt.preventDefault();
              clearTimeout(this._timeout);
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
  isPlaying: PropTypes.bool.isRequired,
  onFilmCardMouseEnter: PropTypes.func.isRequired,
  onFilmCardMouseLeave: PropTypes.func.isRequired,
};

export default FilmCard;
