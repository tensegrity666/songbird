import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import store from '../../store';
import * as actions from '../../redux/actions';

import Answers from '../answers';
import Details from '../details';

import styles from './index.module.css';

const RowWrapper = ({ isNextLevelButtonDisabled }) => {
  const { answersWrapper, button } = styles;

  const { dispatch } = store;
  const { switchToNextLevel } = bindActionCreators(actions, dispatch);

  return (
    <>
      <div className={answersWrapper}>
        <Answers />
        <Details />
      </div>
      <button
        type="button"
        className={`btn btn-primary btn-lg btn-block ${button}`}
        id="nextLevel"
        onClick={switchToNextLevel}
        disabled={isNextLevelButtonDisabled}>
        Следующий уровень
      </button>
    </>
  );
};

const mapStateToProps = ({ isNextLevelButtonDisabled }) => {
  return { isNextLevelButtonDisabled };
};

RowWrapper.propTypes = {
  isNextLevelButtonDisabled: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(RowWrapper);
