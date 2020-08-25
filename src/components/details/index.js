/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import XenoCantoApi from '../../services/xeno-canto-api';
import { getInfo } from '../../data';
import Spinner from '../spinner';
import InfoInner from './info-inner';
import styles from './index.module.css';

class Details extends Component {
  xenoCantoApi = new XenoCantoApi();

  componentDidMount() {
    this.updateBird();
  }

  updateBird() {
    const { details, onError } = this.props;

    if (details.birdID) {
      return;
    }

    this.setState({
      isLoading: true,
    });

    this.xenoCantoApi
      .getData(details.species)
      .then((audio) =>
        this.setState({
          currentBirdID: audio.id,
          nameEn: audio.nameEn,
          latinName: audio.latinName,
          audioURL: audio.audioURL,
          isLoading: false,
        })
      )
      .catch(onError());

    const info = getInfo(details.categoryIndex, details.birdID);
    const { link, description, name, species } = info;

    this.setState((state) => ({
      ...state,
      link,
      description,
      name,
      species,
    }));
  }

  render() {
    const { infoBlock } = styles;

    const { selectedBird, details } = this.props;

    return (
      <div
        className={`card border-secondary col-12 col-sm-12 col-md-12 col-lg-9 ${infoBlock}`}>
        {details.isLoading ? (
          <Spinner />
        ) : (
          <InfoInner details={details} selectedBird={selectedBird} />
        )}
      </div>
    );
  }
}

Details.propTypes = {
  details: PropTypes.object,
  nameEn: PropTypes.string,
  latinName: PropTypes.string,
  audioURL: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};

Details.defaultProps = {
  details: {},
  nameEn: '',
  latinName: '',
  audioURL: '',
  description: '',
  link: '',
  name: '',
};

export default Details;
