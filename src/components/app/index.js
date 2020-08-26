/* eslint-disable no-console */

import React from 'react';

import WinMessage from '../win-message';
import Header from '../header';
import Categories from '../categories';
import RandomSound from '../random-sound';
import RowWrapper from '../row-wrapper';

import store from '../../store';

const App = () => {
  const { isGameFinished } = store.getState();

  return (
    <>
      {isGameFinished ? (
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

export default App;
