import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

import XenoCantoApi from './utils/xeno-canto-api';

const wefwef = new XenoCantoApi();
wefwef.getData('goose').then((data) => console.log(data));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
