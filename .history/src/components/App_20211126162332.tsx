import React, { createContext, useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";
import Detail from "./Detail";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import styles from "../Styles.module.css";
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

export const App: React.FC<Props> = (props) => {
  const [movies, setMovies] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<any>("");
  const [totalResulte, setTotal] = useState<any>(0);
  const [currentPage, setCurrent] = useState<any>(1);

  const handlePaginate = (page: number) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}&page=${page}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const newResult = data.results;
        const newCurrent = page;
        setMovies(newResult);
        setCurrent(newCurrent);
      });
  };

  return (
    <div
      className={styles.App}
      style={{ backgroundColor: "#222222", margin: "0" }}
    >
      <Router>
        <ApolloProvider client={client}>
          <Nav />
          <Switch>
            <MovieContext.Provider value={movies}>
              <SerchContext.Provider value={searchTerm}>
                <TotalContext.Provider value={totalResulte}>
                  <CurrentContext.Provider value={currentPage}>
                    <Route exact path="/" component={Seathbox} />
                    <Route path="/login" component={Login}></Route>
                    <Route path="/detail/:item_id" exact component={Detail} />
                  </CurrentContext.Provider>
                </TotalContext.Provider>
              </SerchContext.Provider>
            </MovieContext.Provider>
          </Switch>
        </ApolloProvider>
      </Router>
    </div>
  );
};

export default App;
