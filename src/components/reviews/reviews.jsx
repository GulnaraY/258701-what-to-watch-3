import React from 'react';
import PropTypes from 'prop-types';

const Reviews = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review, i) =>
          (<div className="review"
            key={review.author + i}
          >
            <blockquote className="review__quote">
              <p className="review__text">{review.text}</p>

              <footer className="review__details">
                <cite className="review__author">{review.author}</cite>
                <time className="review__date" dateTime={`${review.dateTime}`}>{review.dateTime}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>)
        )}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        dateTime: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      })
  ),
};

export default Reviews;
