import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import Router from './components/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';





ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router  />
  </React.StrictMode>,
  document.getElementById('root')
);
