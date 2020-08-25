import React from 'react';

import CATEGORIES from './constants';
import store from '../../store';
import styles from './index.module.css';

const Categories = () => {
  const { buttonGroup } = styles;

  const { activeCategory } = store.getState();

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

export default Categories;
