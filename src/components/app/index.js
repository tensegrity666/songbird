/* eslint-disable no-console */
import React, { useState } from 'react';

import Header from '../header';
import Categories from '../categories';
import RandomSound from '../random-sound';
import RowWrapper from '../row-wrapper';

import store from '../../redux/store';

const App = () => {
  const [isFinished] = useState(false);
  const [isGuessed] = useState(false);
  const [currentCategory] = useState(0);
  const [selectedBird] = useState(null);

  const Congrats = () => <p>Вы победили</p>;

  console.log(store.getState());

  return (
    <>
      {isFinished ? (
        <Congrats />
      ) : (
        <>
          <Header />
          <Categories currentCategory={currentCategory} />
          <RandomSound />
          <RowWrapper isGuessed={isGuessed} selectedBird={selectedBird} />
        </>
      )}
    </>
  );
};

export default App;
