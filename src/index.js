import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import reportWebVitals from './reportWebVitals';
//import {Provider} from 'react-redux';
//import TodoApp from './todo/components/input';
//import store from './store';
import Form from './firebase-todo/form';

ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
