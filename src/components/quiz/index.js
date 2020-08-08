import React from 'react';

import SoundPlayer from '../sound-player';
import Answers from '../answers';
import Info from '../info';

import styles from './index.module.css';

const Quiz = () => {
  const { answersWrapper } = styles;

  return (
    <>
      <SoundPlayer />
      <div className={answersWrapper}>
        <Answers />
        <Info />
      </div>
      <button type="button" className="btn btn-primary btn-lg btn-block">
        Block level button
      </button>
    </>
  );
};

export default Quiz;
