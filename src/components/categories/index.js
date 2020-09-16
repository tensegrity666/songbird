import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CATEGORIES from './constants';
import styles from './index.module.css';

const Categories = ({ activeCategory }) => {
  const { buttonGroup } = styles;

  const indicateCurrentCategory = (i) => {
    return i === activeCategory ? null : true;
  };

  const buttons = CATEGORIES.map((cat) => {
    const index = CATEGORIES.indexOf(cat);

    return (
      <button
        key={CATEGORIES.indexOf(cat)}
        type="button"
        className="btn btn-lg btn-success"
        data-id={`${CATEGORIES.indexOf(cat)}`}
        disabled={indicateCurrentCategory(index)}>
        {cat}
      </button>
    );
  });

  return (
    <div
      className={`btn-group ${buttonGroup}`}
      role="group"
      aria-label="categories of birds">
      {buttons}
    </div>
  );
};

const mapStateToProps = ({ activeCategory }) => {
  return { activeCategory };
};

Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Categories);
