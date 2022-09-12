import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit'
import catsReducer from './catState'
import catSaga from './catSaga';
const saga = createSagaMiddleware();
const store = configureStore({

  reducer: {
    cats: catsReducer
  },
  middleware:[saga]

  });
  saga.run(catSaga)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();