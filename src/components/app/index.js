/* eslint-disable no-console */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WinMessage from '../win-message';
import Header from '../header';
import Categories from '../categories';
import RandomSound from '../random-sound';
import RowWrapper from '../row-wrapper';

const App = ({ activeCategory }) => {
  return (
    <>
      {activeCategory > 5 ? (
        <WinMessage />
      ) : (
        <>
          <Header />
          <Categories />
          <RandomSound />
          <RowWrapper />
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ activeCategory }) => {
  return { activeCategory };
};

App.propTypes = {
  activeCategory: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(App);
