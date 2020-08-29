/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/media-has-caption */

import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import InfoInner from './info-inner';

import styles from './index.module.css';

const Details = ({ isContentLoading }) => {
  const { infoBlock } = styles;

  return (
    <div
      className={`card border-secondary col-12 col-sm-12 col-md-12 col-lg-9 ${infoBlock}`}>
      {isContentLoading ? <Spinner /> : <InfoInner />}
    </div>
  );
};

const mapStateToProps = ({
  activeCategory,
  selectedAnswer,
  isContentLoading,
}) => {
  return { activeCategory, selectedAnswer, isContentLoading };
};

export default connect(mapStateToProps)(Details);
