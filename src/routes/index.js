'use strict';

import React from 'react';
import exampleImage from '../assets/images/yeoman.png';

export default React.createClass({
  render() {
    return (
      <div class='index-route'>
        <h1>Index</h1>
        <p>Welcome to React!</p>
        <img src={exampleImage} />
      </div>
    );
  }
});
