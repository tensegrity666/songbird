import React from 'react';

import styles from './index.module.css';

const Categories = () => {
  const { buttonGroup } = styles;

  return (
    <div
      className={`btn-group ${buttonGroup}`}
      role="group"
      aria-label="categories of birds">
      <button type="button" className="btn btn-lg btn-success">
        passeriformes
      </button>
      <button type="button" className="btn btn-lg btn-success">
        birds of prey
      </button>
      <button type="button" className="btn btn-lg btn-success">
        forest birds
      </button>
      <button type="button" className="btn btn-lg btn-success">
        songbirds
      </button>
      <button type="button" className="btn btn-lg btn-success">
        seabirds
      </button>
    </div>
  );
};

export default Categories;
