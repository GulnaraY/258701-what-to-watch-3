import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';
import VideoPlayer from '../video-player/video-player.jsx';

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: null,
      hoverTimeOut: null,
    };
  }

  _hoverHandler(id) {
    this.setState({
      hoverTimeOut: setTimeout(() => this.setState({
        activeIndex: this._playVideo(id),
      }), 1000),
    });
  }

  _playVideo(id) {
    const {movies} = this.props;
    return movies.findIndex((movie) => movie.id === id);
  }

  _handleVideoUnhover() {
    this.setState({
      activeIndex: null,
    });
  }

  _handleFilmCardUnhover() {
    clearTimeout(this.state.hoverTimeOut);
    this.setState({
      hoverTimeOut: null,
    });
  }

  render() {
    const {movies, onTitleClick, onCardHover} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) =>
          (index === this.state.activeIndex)
            ? <VideoPlayer
              key= {index + movie}
              src={movie.video}
              poster={movie.picture}
              onVideoUnHover={() => {
                this._handleVideoUnhover();
              }}
            />
            : <FilmCard
              key = {index + movie}
              filmInfo={movie}
              onTitleClick={onTitleClick}
              onCardHover={(activeId)=>{
                this._hoverHandler(activeId);
                onCardHover(activeId);
              }}
              onCardUnhover={() => {
                this._handleFilmCardUnhover();
              }}
            />
        )}
      </div>
    );
  }
}

FilmsList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })),
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default FilmsList;
