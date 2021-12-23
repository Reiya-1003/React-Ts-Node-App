import React, { createContext, useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";
import Detail from "./Detail";

import Favo from "./Favo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import styles from "../Styles.module.css";
import { Container, Row, Col } from "reactstrap";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

export const MovieContext = createContext<any>([]);
export const SerchContext = createContext<any>("");
export const TotalContext = createContext<any>(0);
export const CurrentContext = createContext<any>(1);

interface Props {
  sum?: number;
  per?: number;
  onChange?: (e: { page: number }) => void;
}

const client: any = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

export const App: React.FC<Props> = (props) => {
  const [movies, setMovies] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<any>("");
  const [totalResulte, setTotal] = useState<any>(0);
  const [currentPage, setCurrent] = useState<any>(1);

  return (
    <div
      className={styles.App}
      style={{ backgroundColor: "#222222", margin: "0" }}
    >
      <ApolloProvider client={client}>
        <Router>
          <Nav />
          <Switch>
            <MovieContext.Provider value={movies}>
              <SerchContext.Provider value={searchTerm}>
                <TotalContext.Provider value={totalResulte}>
                  <CurrentContext.Provider value={currentPage}>
                    <Route exact path="/" component={Seathbox} />

                    <Route path="/favo" component={Favo}></Route>
                    <Route path="/detail/:item_id" exact component={Detail} />
                  </CurrentContext.Provider>
                </TotalContext.Provider>
              </SerchContext.Provider>
            </MovieContext.Provider>
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
