/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';

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
    birdID: 1,
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

  updateInfo = (categoryIndex) => {
    const info = getInfo(categoryIndex);

    const { link, description, name, species } = info;
    const { selectedBird } = this.props;

    this.setState((state) => ({
      ...state,
      link,
      description,
      name,
      species,
      birdID: selectedBird,
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
    const { isCorrect, isChecked, categoryIndex } = this.state;
    const { selectedBird } = this.props;

    return (
      <>
        <div className={answersWrapper}>
          <Answers
            selectedBird={selectedBird}
            isChecked={isChecked}
            isCorrect={isCorrect}
            onAnswer={this.onAnswer}
            categoryIndex={categoryIndex}
          />
          <Details
            details={this.state}
            selectedBird={selectedBird}
            onError={this.onError}
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
  }
}

export default RowWrapper;
