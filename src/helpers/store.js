// @flow
import { createStore, applyMiddleware } from 'redux'; // applyMiddleware for using thunk middleware
import reduxThunk from 'redux-thunk'; // For asynchronous and actions with side effects
// import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/rootReducer';

// const loggerMiddleware = createLogger();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));
export default store;
