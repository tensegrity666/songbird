import React from 'react';

import styles from './index.module.css';

const ErrorMessage = () => {
  const { error } = styles;

  return (
    <div className={error}>Упс, почтовые голуби где-то задержались...</div>
  );
};

export default ErrorMessage;
