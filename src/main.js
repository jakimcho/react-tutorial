console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import App from './components/App';

 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );

  ReactDOM.render(
    React.createElement(App),
    document.getElementById('calc')
  );
});