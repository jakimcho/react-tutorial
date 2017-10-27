console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import App from './components/App';
import Layout from './components/Layout';
import { HashRouter as Router, Route } from 'react-router-dom';

 
document.addEventListener('DOMContentLoaded', function() {
/*  ReactDOM.render(
    React.createElement(Counter, {name: "Jakim"}),
    document.getElementById('mount')
  );*/

  const mountingPoint = document.getElementById('mount');
  const app = ( // this brakets are used only for better reading.
    <Router>
      <Route path='/' component={ Layout } />
    </Router>
  )

  ReactDOM.render(
    app,
    mountingPoint
  );

});