/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';

import XenoCantoApi from '../../utils/xeno-canto-api';

import styles from './index.module.css';

class Info extends Component {
  xenoCantoApi = new XenoCantoApi();

  state = {
    data: {},
  };

  componentDidMount() {
    this.updateAudio();
    // this.updateImage()
  }

  onDataLoaded = (data) => {
    this.setState({ data });
  };

  updateAudio() {
    this.xenoCantoApi.getData('goose').then(this.onDataLoaded);
  }

  render() {
    const {
      data: { name, latinName, audioURL, cardText, imageURL },
    } = this.state;
    const { infoBlock, soundPlayer } = styles;

    return (
      <div className={`card border-secondary col-12 col-md-6 ${infoBlock}`}>
        <img src={imageURL} alt={name} />
        <div className="card-header">{name}</div>
        <div className="card-body">
          <h4 className="card-title">{latinName}</h4>
          <audio className={soundPlayer} src={audioURL} controls />
          <p className="card-text">{cardText}</p>
        </div>
      </div>
    );
  }
}

export default Info;
