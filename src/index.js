import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faUserCircle,
  faArrowCircleRight,
  faCheck,
  faCheckDouble,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons';

import App from './App';

library.add(
  faChevronLeft,
  faUserCircle,
  faArrowCircleRight,
  faCheck,
  faCheckDouble,
  faCircleNotch
);
dom.watch();

const container = document.getElementById('app');
// render the main component
ReactDOM.render(<App/>, container);
