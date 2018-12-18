import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import MainComponent from './components/MainComponent'
import PdfContainer from './components/PdfContainer'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-sm-12">
      </div>
    );
  }
}

render(<PdfContainer />, document.getElementById('root'));
