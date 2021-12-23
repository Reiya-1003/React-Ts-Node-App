import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import reportWebVitals from "./reportWebVitals";

interface Props {
  sum: number;
  per: number;
  onChange: (e: { page: number }) => void;
}

ReactDOM.render(
  <React.StrictMode>
    <App:Props />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
