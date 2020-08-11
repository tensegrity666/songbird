import React from 'react';

import RandomSound from '../random-sound';
import Answers from '../answers';
import Info from '../info';

import styles from './index.module.css';

const Quiz = () => {
  const { answersWrapper, button } = styles;

  return (
    <>
      <RandomSound />
      <div className={answersWrapper}>
        <Answers />
        <Info />
      </div>
      <button
        type="button"
        className={`btn btn-primary btn-lg btn-block ${button}`}>
        Block level button
      </button>
    </>
  );
};

export default Quiz;
