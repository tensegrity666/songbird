import React from 'react';

import CATEGORIES from './constants';

import styles from './index.module.css';

const Categories = () => {
  const { buttonGroup } = styles;

  const buttons = CATEGORIES.map((category) => {
    return (
      <button
        key={CATEGORIES.indexOf(category)}
        type="button"
        className="btn btn-lg btn-success"
        data-id={`cat${CATEGORIES.indexOf(category)}`}
        disabled>
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

export default Categories;
