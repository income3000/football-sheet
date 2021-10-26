import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './components/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Table from './components/Table';
// import {Homepage, Aboutpage } from './App';
ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/Form' exact component={Form} />
      <Route path='/Table' exact component={Table} />
    </Switch>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
