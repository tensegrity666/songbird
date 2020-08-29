/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import InfoInner from './info-inner';

import styles from './index.module.css';

const Details = ({ isDetailsLoading }) => {
  const { infoBlock } = styles;

  return (
    <div
      className={`card border-secondary col-12 col-sm-12 col-md-12 col-lg-9 ${infoBlock}`}>
      {isDetailsLoading ? <Spinner /> : <InfoInner />}
    </div>
  );
};

const mapStateToProps = ({ isDetailsLoading }) => {
  return { isDetailsLoading };
};

Details.propTypes = {
  isDetailsLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Details);
