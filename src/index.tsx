import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from 'store/configureStore';
import { sendReducer } from 'modules/SendModule/reducers';
import { Provider } from 'react-redux';

const state = {
  message: ""
};

const store = configureStore(sendReducer, state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
