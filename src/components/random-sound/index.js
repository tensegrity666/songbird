/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

// import XenoCantoApi from '../../utils/xeno-canto-api';

import { getArrayOfNames, getInfo } from '../../data';
import randomizer from './helpers';

import styles from './index.module.css';

class RandomSound extends Component {
  // const xenoCantoApi = new XenoCantoApi();

  names = getArrayOfNames(0);

  randomIndex = randomizer(0, this.names.length - 1);

  state = {
    link: '',
  };

  componentDidMount() {
    // this.updateAudio();
    this.updateInfo(0);

    console.log(this.randomIndex);
  }

  updateInfo(id) {
    const info = getInfo(id, this.randomIndex);
    const { link } = info;

    this.setState({
      link,
    });
  }

  render() {
    const { link } = this.state;
    const { playerContayner, playerElement, wrapper } = styles;

    return (
      <div className={`jumbotron ${wrapper}`}>
        <div className={playerContayner}>
          <img src={link} alt="werer" width="400" />
          <div className={`card border-success ${playerElement}`}>
            <h4 className="card-header">{}</h4>
            <div className="card-body">sdfsfddsf</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomSound;
