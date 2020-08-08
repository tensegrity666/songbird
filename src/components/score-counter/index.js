import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const ScoreCounter = ({ score }) => {
  const { scoreBar } = styles;

  return <span className={scoreBar}>Score: {score}</span>;
};

ScoreCounter.propTypes = {
  score: PropTypes.number,
};

ScoreCounter.defaultProps = {
  score: 0,
};

export default ScoreCounter;
