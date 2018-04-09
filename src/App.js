import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Size from "./components/Size";
import Reset from "./components/reset";
import Result from "./components/result";
class App extends Component {
  render() {
    return (
      <div className={"mg-30"}>
          <div className={"container"}>
              <div className={"row"}>
                  <div className={"col-md-6"}>
                    <ColorPicker />
                  </div>
                  <div className={"col-md-6"}>
                      <Size />
                  </div>
                  <div className={"col-md-12"}>
                    <Reset />
                  </div>
                  <div className={"col-md-12"}>
                    <Result />
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
