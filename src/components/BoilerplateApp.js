'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../assets/css/app.css');

var imageURL = require('../assets/images/yeoman.png');

var BoilerplateApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
          <div>Hello React!!!</div>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = BoilerplateApp;
