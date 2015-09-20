'use strict';

describe('BoilerplateApp', () => {
  let React = require('react/addons');
  let BoilerplateApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    BoilerplateApp = require('components/BoilerplateApp.js');
    component = React.createElement(BoilerplateApp);
  });

  it('should create a new instance of BoilerplateApp', () => {
    expect(component).toBeDefined();
  });
});
