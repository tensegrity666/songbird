/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import RandomSound from '../random-sound';
import Answers from '../answers';
import Info from '../info';

import XenoCantoApi from '../../utils/xeno-canto-api';
import { getInfo } from '../../data';

import styles from './index.module.css';

class Quiz extends Component {
  xenoCantoApi = new XenoCantoApi();

  state = {
    isLoading: true,
    error: false,
    name: '',
    nameEn: '',
    latinName: '',
    audioURL: '',
    link: '',
    description: '',
    species: '',
  };

  async componentDidMount() {
    await this.updateInfo(0);

    const { species } = this.state;

    this.updateAudio(species);
  }

  updateAudio = (requestText) => {
    this.xenoCantoApi
      .getData(requestText)
      .then((audio) =>
        this.setState({
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

  render() {
    const { answersWrapper, button } = styles;

    return (
      <>
        <RandomSound />
        <div className={answersWrapper}>
          <Answers />
          <Info info={this.state} />
        </div>
        <button
          type="button"
          className={`btn btn-primary btn-lg btn-block ${button}`}>
          Следующий уровень
        </button>
      </>
    );
  }
}

export default Quiz;
