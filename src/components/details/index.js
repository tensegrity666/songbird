/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import InfoInner from './info-inner';

import { getInfo } from '../../data';
import useBirdInfo from '../hooks/use-bird-info';

import styles from './index.module.css';

const Details = ({ selectedBird }) => {
  const { infoBlock } = styles;

  const info = getInfo(0, 0);
  const req = info.species;

  const details = useBirdInfo(req, info);

  return (
    <div
      className={`card border-secondary col-12 col-sm-12 col-md-12 col-lg-9 ${infoBlock}`}>
      {details.isContentLoading ? (
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
