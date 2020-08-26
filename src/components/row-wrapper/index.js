/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */

import React, { useState } from 'react';

import Answers from '../answers';
import Details from '../details';

import XenoCantoApi from '../../services/xeno-canto-api';
import { getInfo } from '../../data';

import styles from './index.module.css';

const RowWrapper = ({ selectedBird }) => {
  const { answersWrapper, button } = styles;
  const xenoCantoApi = new XenoCantoApi();

  const [mainInfo, setMainInfo] = useState({
    isLoading: true,
    error: false,
    isCorrect: false,
    categoryIndex: 0,
    birdID: 1,
    name: '',
    nameEn: '',
    latinName: '',
    audioURL: '',
    link: '',
    description: '',
    species: null,
  });

  const onError = () => {
    setMainInfo({
      error: true,
      isLoading: false,
    });
  };

  const unlockNextLevelButton = () => {
    const { isCorrect } = mainInfo;
    const nextLevelBtn = document.querySelector('#nextLevel');

    if (isCorrect) {
      nextLevelBtn.disabled = false;
    }

    setMainInfo({
      categoryIndex: 1,
    });
  };

  const updateAudio = (requestText) => {
    xenoCantoApi
      .getData(requestText)
      .then((audio) =>
        setMainInfo({
          currentBirdID: audio.id,
          nameEn: audio.nameEn,
          latinName: audio.latinName,
          audioURL: audio.audioURL,
          isLoading: false,
        })
      )
      .catch(onError);
  };

  const updateInfo = (categoryIndex) => {
    const info = getInfo(categoryIndex);
    const { link, description, name, species } = info;

    setMainInfo((state) => ({
      ...state,
      link,
      description,
      name,
      species,
      birdID: selectedBird,
    }));
  };

  // useEffect(() => {
  //   const { categoryIndex } = mainInfo;

  //   updateInfo(categoryIndex);

  //   const { species } = mainInfo;

  //   updateAudio(species);
  // }, [updateInfo, mainInfo, updateAudio]);

  const onAnswer = (event) => {
    const { isLoading } = mainInfo;
    // const { answersButtons } = styles;

    if (isLoading) {
      return;
    }

    const randomSoundId = document.querySelector('#randomSound').dataset.random;
    const checkedAnswerId = event.target.dataset.index;

    if (randomSoundId === checkedAnswerId) {
      setMainInfo({
        isCorrect: true,
      });

      unlockNextLevelButton();
      // eslint-disable-next-line no-console
      console.log('true!');
    }

    // event.target.className = isCorrect
    //   ? `btn btn-success ${answersButtons}`
    //   : `btn btn-danger ${answersButtons}`;
  };

  const { isCorrect, isChecked, categoryIndex } = mainInfo;

  return (
    <>
      <div className={answersWrapper}>
        <Answers
          selectedBird={selectedBird}
          isChecked={isChecked}
          isCorrect={isCorrect}
          categoryIndex={categoryIndex}
          onAnswer={onAnswer}
        />
        <Details
          details={mainInfo}
          selectedBird={selectedBird}
          onError={onError}
        />
      </div>
      <button
        type="button"
        className={`btn btn-primary btn-lg btn-block ${button}`}
        id="nextLevel"
        disabled>
        Следующий уровень
      </button>
    </>
  );
};

export default RowWrapper;
