import React from 'react';
import ReactDOM from 'react-dom';
import Helpers from 'helper';

import CarTool from 'components/CarTool';

fetch('http://localhost:5000/cars')
  .then(res=> res.json())
  .then(cars => {
    ReactDOM.render(<CarTool myCars={cars} headers={Helpers.headers} />, document.querySelector('main'));
  });