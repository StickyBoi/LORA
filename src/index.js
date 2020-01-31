// Libs
import React from "react";
import { render } from "react-dom";
// Root
import Root from "@/layouts/App";
// Styles
import "@/themes/App.global.scss";

const App = Root;
render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept("./layouts/App", () => {
    require("@/layouts/App");
    render(<App />, document.getElementById("app"));
  });
}
