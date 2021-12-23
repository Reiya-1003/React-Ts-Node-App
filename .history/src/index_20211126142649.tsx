import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "react-apollo-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { Route, Switch } from "react-router-dom";

interface Props {
  sum: number;
  per: number;
  onChange: (e: { page: number }) => void;
}

const uri = "http://localhost:4000/graphql";
const context = setContext((_, { headers }) => {
  return {
    headers: { ...headers, token: localStorage.getItem("token") },
  };
});
const link = context.concat(createHttpLink({ uri }));
const cache = new InMemoryCache();
const client = new ApolloClient({ cache, link });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
