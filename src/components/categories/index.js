import React from 'react';
import PropTypes from 'prop-types';

import CATEGORIES from './constants';
import styles from './index.module.css';

const Categories = ({ currentCategory }) => {
  const { buttonGroup } = styles;

  const indicateCurrentCategory = (index) => {
    return index === currentCategory ? null : true;
  };

  const buttons = CATEGORIES.map((category) => {
    return (
      <button
        key={CATEGORIES.indexOf(category)}
        type="button"
        className="btn btn-lg btn-success"
        data-id={`${CATEGORIES.indexOf(category)}`}
        disabled={indicateCurrentCategory(CATEGORIES.indexOf(category))}>
        {category}
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

Categories.propTypes = {
  currentCategory: PropTypes.number.isRequired,
};

export default Categories;
