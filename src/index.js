// https://reactjs.org/docs/javascript-environment-requirements.html
import "react-app-polyfill/ie9";
import "core-js";
import "raf/polyfill";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
