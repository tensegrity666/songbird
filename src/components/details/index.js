/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import InfoInner from './info-inner';

import { getInfo } from '../../data';
import useBirdInfo from '../hooks/use-bird-info';
import store from '../../store';

import styles from './index.module.css';

const Details = ({ activeCategory, selectedAnswer }) => {
  const { infoBlock } = styles;

  // const info = getInfo(activeCategory, selectedAnswer);
  // const req = info.species;

  // const details = useBirdInfo(req, info);

  // console.log(activeCategory)
  const details = { isContentLoading: true };

  return (
    <div
      className={`card border-secondary col-12 col-sm-12 col-md-12 col-lg-9 ${infoBlock}`}>
      {details.isContentLoading ? <Spinner /> : <InfoInner details={details} />}
    </div>
  );
};

const mapStateToProps = ({ activeCategory, selectedAnswer }) => {
  return { activeCategory, selectedAnswer };
};

export default connect(mapStateToProps)(Details);
