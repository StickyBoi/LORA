import React, { Component } from "react";
import WindowController from "./WindowController";
import HomeView from "../screens/Home/HomeView";
import "./windowControl.css";

/**
 * App
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <div id="main">
        <WindowController />
        <HomeView />
      </div>
    );
  }
}

export default App;
