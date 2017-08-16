import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './scenes/home';
import Contact from './scenes/contact';
import Price from './scenes/price';
import registerServiceWorker from './registerServiceWorker';
import tracker from './rdTracker';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/price" component={Price} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
tracker();
