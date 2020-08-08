import React from 'react';
import PropTypes from 'prop-types';

import ScoreCounter from '../score-counter';

import styles from './index.module.css';

const Header = ({ score }) => {
  const { header, logo } = styles;

  return (
    <header className={`navbar navbar-expand-lg bg-light ${header}`}>
      <h1 className={logo}>SongBird</h1>
      <ScoreCounter score={score} />
    </header>
  );
};

Header.propTypes = {
  score: PropTypes.number,
};

Header.defaultProps = {
  score: 0,
};

export default Header;
