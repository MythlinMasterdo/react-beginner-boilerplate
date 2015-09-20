'use strict';

import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import App from './app';
import Index from './index';
import About from './about';

var routes = (
  <Route name="app" handler={App} path='/'>
    <DefaultRoute handler={Index} />
    <Route name="index" handler={Index} />
    <Route name="about" handler={About} />
  </Route>
);

var content = document.getElementById('react');
Router.run(routes, function (Handler) {
  React.render(<Handler/>, content);
});
