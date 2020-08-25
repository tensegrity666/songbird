import './wdyr';

import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';

import App from './components/app';
import store from './redux/store';

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
