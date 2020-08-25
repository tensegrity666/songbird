import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const PlayerContainer = ({ errorText, inner }) => {
  const { playerContayner } = styles;

  return <div className={playerContayner}>{errorText || inner}</div>;
};

PlayerContainer.propTypes = {
  errorText: PropTypes.string.isRequired,
  inner: PropTypes.element.isRequired,
};

export default PlayerContainer;
