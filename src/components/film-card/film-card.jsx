import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeElement: null,
    };
  }
  _hoverHandler(id) {
    this.setState({
      activeElement: id,
    });
  }

  render() {
    const {filmInfo, onTitleClick, onCardHover} = this.props;
    const {title, picture, id} = filmInfo;
    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          this._hoverHandler(id);
          onCardHover(id);
        }}
      >
        <div className="small-movie-card__image">
          <img
            src={`img/${picture}`}
            alt={title}
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            onClick = {onTitleClick}
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
  }),
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default FilmCard;
