import React from 'react';

import styles from './index.module.css';

const ErrorMessage = () => {
  const { error } = styles;

  return <div className={error}>Oops, something wrong...</div>;
};

export default ErrorMessage;
