import React from 'react';

import store from '../../store';
import styles from './index.module.css';

const ScoreCounter = () => {
  const { scoreBar } = styles;

  const { score } = store.getState();

  return <span className={scoreBar}>Score: {score}</span>;
};

export default ScoreCounter;
