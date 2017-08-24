import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './scenes/home';
import Contact from './scenes/contact';
import Price from './scenes/price';
import registerServiceWorker from './registerServiceWorker';
import withTracker from './shared/_/withTracker';
import './index.css';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/price" component={withTracker(Price)}/>
        <Route path="/contact" component={withTracker(Contact)}/>
        <Route path="/" component={withTracker(Home)}/>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root'));
registerServiceWorker();
