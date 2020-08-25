/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';

import RandomSound from '../random-sound';
import Answers from '../answers';
import Details from '../details';

import XenoCantoApi from '../../utils/xeno-canto-api';
import { getInfo } from '../../data';

import styles from './index.module.css';

class RowWrapper extends Component {
  xenoCantoApi = new XenoCantoApi();

  state = {
    isLoading: true,
    error: false,
    isCorrect: false,
    categoryIndex: 0,
    name: '',
    nameEn: '',
    latinName: '',
    audioURL: '',
    link: '',
    description: '',
    species: null,
  };

  async componentDidMount() {
    const { categoryIndex } = this.state;

    await this.updateInfo(categoryIndex);

    const { species } = this.state;

    this.updateAudio(species);
  }

  unlockNextLevelButton = () => {
    const { isCorrect } = this.state;
    const nextLevelBtn = document.querySelector('#nextLevel');

    if (isCorrect) {
      nextLevelBtn.disabled = false;
    }

    this.setState({
      categoryIndex: 1,
    });
  };

  updateAudio = (requestText) => {
    this.xenoCantoApi
      .getData(requestText)
      .then((audio) =>
        this.setState({
          currentBirdID: audio.id,
          nameEn: audio.nameEn,
          latinName: audio.latinName,
          audioURL: audio.audioURL,
          isLoading: false,
        })
      )
      .catch(this.onError);
  };

  updateInfo = (categoryIndex, birdID) => {
    const info = getInfo(categoryIndex, birdID);

    const { link, description, name, species } = info;

    this.setState((state) => ({
      ...state,
      link,
      description,
      name,
      species,
    }));
  };

  onError = () => {
    this.setState({
      error: true,
      isLoading: false,
    });
  };

  onAnswer = (event) => {
    const { isCorrect, isLoading } = this.state;
    const { answersButtons } = styles;

    if (isLoading) {
      return;
    }

    const randomSoundId = document.querySelector('#randomSound').dataset.random;
    const checkedAnswerId = event.target.dataset.index;

    if (randomSoundId === checkedAnswerId) {
      this.setState({
        isCorrect: true,
      });

      this.unlockNextLevelButton();
    }

    event.target.className = isCorrect
      ? `btn btn-success ${answersButtons}`
      : `btn btn-danger ${answersButtons}`;
  };

  render() {
    const { answersWrapper, button } = styles;
    const { error, isCorrect, isChecked } = this.state;

    return (
      <>
        <RandomSound error={error} />
        <div className={answersWrapper}>
          <Answers
            isChecked={isChecked}
            isCorrect={isCorrect}
            onAnswer={this.onAnswer}
          />
          <Details details={this.state} />
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
  }
}

export default RowWrapper;
