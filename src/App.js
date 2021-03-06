import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Button from 'lotusjs-components/lib/view/functional/Button';
import * as AbstractComponent from 'lotusjs-components/lib/view/functional/AbstractComponent';
import * as ComponentRegistry from 'lotusjs-components/lib/context/functional/ComponentRegistry';

function App() {
  const template = document.createElement('div');
  template.innerHTML = '<template id="app">\n' +
      '  <div data-component-root="root">\n' +
      '    <button data-skin-part="button">\n' +
      '      <label>Hello World with Bootsrap</label>\n' +
      '    </button>\n' +
      '  </div>\n' +
      '</template>\n'
  const tagDef = {
    inserted: (component) => {
    },
    removed: (component) => {
      component.element = null;
    },
    template: template.firstChild,
    tagName: 'lotus-button',
    tagFunction: Button.createComponent
  };
  ComponentRegistry.register(tagDef);
  const button = useRef();
  const responder = {
    onEvent: (event) => {
      console.log('ref callback called');
    }
  }
  useEffect( () => {
    button.current.component.addEventListener(AbstractComponent.Events.CLICK, responder, 'onEvent');
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <lotus-button ref={button}><label>Hello World</label></lotus-button>
      </header>
    </div>
  );
}

export default App;
