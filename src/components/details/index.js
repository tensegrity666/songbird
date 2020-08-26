/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/media-has-caption */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import XenoCantoApi from '../../services/xeno-canto-api';
import { getInfo } from '../../data';
import Spinner from '../spinner';
import InfoInner from './info-inner';
import styles from './index.module.css';

const Details = ({ details, onError, selectedBird }) => {
  const { infoBlock } = styles;
  const xenoCantoApi = new XenoCantoApi();

  const [birdAudio, setBirdAudio] = useState({
    isLoading: true,
  });

  const [birdDetails, setBirdDetails] = useState({});

  const updateBirdAudio = () => {
    if (!details.birdID) {
      return;
    }

    xenoCantoApi
      .getData(details.species)
      .then((audio) =>
        setBirdAudio({
          currentBirdID: audio.id,
          nameEn: audio.nameEn,
          latinName: audio.latinName,
          audioURL: audio.audioURL,
          isLoading: false,
        })
      )
      .catch(onError());
  };

  const updateBirdDetails = () => {
    const info = getInfo(details.categoryIndex, details.birdID);
    const { link, description, name, species } = info;

    setBirdDetails((state) => ({
      ...state,
      link,
      description,
      name,
      species,
      isLoading: false,
    }));
  };

  useEffect(() => {
    updateBirdDetails();
    console.log(birdDetails);
  }, [birdDetails, updateBirdDetails]);

  return (
    <div
      className={`card border-secondary col-12 col-sm-12 col-md-12 col-lg-9 ${infoBlock}`}>
      {birdDetails.isLoading ? (
        <Spinner />
      ) : (
        <InfoInner details={details} selectedBird={selectedBird} />
      )}
    </div>
  );
};

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
