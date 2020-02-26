import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const RatingMap = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

const getFilmsMark = (rating) => {
  if (rating <= 3) {
    return RatingMap.BAD;
  } else if (rating <= 5) {
    return RatingMap.NORMAL;
  } else if (rating <= 8) {
    return RatingMap.GOOD;
  } else if (rating < 10) {
    return RatingMap.VERY_GOOD;
  } else if (rating === 10) {
    return RatingMap.AWESOME;
  }

  return null;
};

const Overview = (props) => {
  const {rating, ratingAmount, description, director, actors} = props;

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getFilmsMark(rating)}</span>
          <span className="movie-rating__count">{ratingAmount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p></p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {actors.map((actor) => actor).join(`, `)} and other</strong></p>
      </div>
    </Fragment>
  );
};

Overview.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingAmount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Overview;
