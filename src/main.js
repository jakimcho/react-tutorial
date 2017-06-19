console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Display



 from './components/Display';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );

  ReactDOM.render(
    React.createElement(Display),
    document.getElementById('calc')
  );
});