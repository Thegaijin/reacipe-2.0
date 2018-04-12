// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // connect react and redux
import WebFontLoader from 'webfontloader';
// import { BrowserRouter as Router } from 'react-router-dom';

import './styles/index.css';
import './styles/style.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './helpers/store';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
