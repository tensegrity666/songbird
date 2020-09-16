import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './index.module.css';

const ScoreCounter = ({ score }) => {
  const { scoreBar } = styles;

  return <span className={scoreBar}>Результат: {score}</span>;
};

const mapStateToProps = ({ score }) => {
  return { score };
};

ScoreCounter.propTypes = {
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(ScoreCounter);
