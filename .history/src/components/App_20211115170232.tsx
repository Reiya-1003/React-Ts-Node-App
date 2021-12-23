import React, { createContext, useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";

export const MovieContext = createContext<any>([]);
export const SerchContext = createContext<any>("");
export const TotalContext = createContext<any>(0);
export const CurrentContext = createContext<any>(1);

const App = () => {
  const [movies, setMovies] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<any>("");
  const [totalResulte, setTotal] = useState<any>(0);
  const [currentPage, setCurrent] = useState<any>(1);

  return (
    <div className="App">
      <MovieContext.Provider value={movies}>
        <SerchContext.Provider value={searchTerm}>
          <Nav />
          <Seathbox />
        </SerchContext.Provider>
      </MovieContext.Provider>
    </div>
  );
};

export default App;
