/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const PlayerContainer = ({ errorText, inner }) => {
  const { playerContayner } = styles;

  return <div className={playerContayner}>{errorText || inner}</div>;
};

PlayerContainer.propTypes = {
  errorText: PropTypes.object,
  inner: PropTypes.element.isRequired,
};

PlayerContainer.defaultProps = {
  errorText: '',
};

export default PlayerContainer;
