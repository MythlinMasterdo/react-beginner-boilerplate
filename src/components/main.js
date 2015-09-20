'use strict';

var BoilerplateApp = require('./BoilerplateApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={BoilerplateApp}>
    <Route name="/" handler={BoilerplateApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
