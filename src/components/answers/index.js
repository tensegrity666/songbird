import React from 'react';
import { nanoid } from 'nanoid';

import styles from './index.module.css';

import { getArrayOfNames } from '../../data';

const Answers = () => {
  const { answers, transparentize, button } = styles;
  const names = getArrayOfNames(0);

  const buttons = names.map((name) => {
    return (
      <li
        key={nanoid()}
        className={`list-group-item d-flex justify-content-between align-items-center ${transparentize}`}>
        <button type="button" className={`btn btn-info ${button}`}>
          {name}
        </button>
      </li>
    );
  });

  return <ul className={`list-group col-12 col-md-3 ${answers}`}>{buttons}</ul>;
};

export default Answers;
