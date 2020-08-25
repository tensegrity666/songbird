import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const PlayerContainer = ({ errorText, inner }) => {
  const { playerContayner } = styles;

  return <div className={playerContayner}>{errorText || inner}</div>;
};

PlayerContainer.propTypes = {
  errorText: PropTypes.string,
  inner: PropTypes.element.isRequired,
};

PlayerContainer.defaultProps = {
  errorText: '',
};

export default PlayerContainer;
