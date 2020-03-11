import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Overview from './overwiew/overview.jsx';
import Details from './details/details.jsx';
import Reviews from './reviews/reviews.jsx';

const TabsMap = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TabsMap.OVERVIEW,
    };
  }

  _getTabMarkup() {
    const {rating, ratingAmount, description, director, actors} = this.props;
    const {genre, release, runTime} = this.props;
    const {reviews} = this.props;
    switch (this.state.activeTab) {
      case TabsMap.OVERVIEW:
        return (<Overview
          rating={rating}
          ratingAmount={ratingAmount}
          description={description}
          director={director}
          actors={actors}
        />);
      case TabsMap.DETAILS:
        return (<Details
          director={director}
          actors={actors}
          genre={genre}
          release={release}
          runTime={runTime}
        />);
      case TabsMap.REVIEWS:
        return (<Reviews
          reviews={reviews}
        />);
    }
    return null;
  }

  _handleTabLinkClick(value) {
    this.setState({
      activeTab: TabsMap[value.toUpperCase()],
    });
  }

  render() {
    const {onTabsLinkClick} = this.props;
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(TabsMap).map((tab, i) => (
              <li key={tab + i} className={`movie-nav__item ${this.state.activeTab === tab ? `movie-nav__item--active` : ``}`}>
                <a href="#" className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    this._handleTabLinkClick(evt.target.text);
                    onTabsLinkClick();
                  }}
                >{tab}</a>
              </li>
            ))}
          </ul>
        </nav>

        {this._getTabMarkup()}
      </div>
    );
  }
}

Tabs.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingAmount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string.isRequired),
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  runTime: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        dateTime: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      })
  ),
  onTabsLinkClick: PropTypes.func.isRequired,
};

export default Tabs;
