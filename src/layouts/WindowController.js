import React, { Component } from "react";
import "./windowControl.css";

/**
 * WindowController
 *
 * @class WindowController
 * @extends {Component}
 */
class WindowController extends Component {
  render() {
    return (
      <header id="titlebar">
        <div id="drag-region">
          <div id="window-title">
            <span>LORA</span>
          </div>
          <div id="window-controls">
            <div className="button" id="min-button">
              <span>&#xE921;</span>
            </div>
            <div className="button" id="max-button">
              <span>&#xE922;</span>
            </div>
            <div className="button" id="restore-button">
              <span>&#xE923;</span>
            </div>
            <div className="button" id="close-button">
              <span>&#xE8BB;</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default WindowController;
