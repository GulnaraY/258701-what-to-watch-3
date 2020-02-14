import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

class FilmsList extends PureComponent {
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
    const {movies, onTitleClick, onCardHover} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) =>
          <FilmCard
            key = {index + movie}
            filmInfo={movie}
            onTitleClick={onTitleClick}
            onCardHover={(activeId)=>{
              this._hoverHandler(activeId);
              onCardHover(activeId);
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
