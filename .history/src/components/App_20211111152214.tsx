import React, { createContext, useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";

export const MovieContext = createContext([]);
export const Serchcontext = createContext("");

const App = () => {
  const [movies, setMovies] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<any>("");
  return (
    <div className="App">
      <MovieContext.Provider value={movies}>
        <Nav />
        <Seathbox />
      </MovieContext.Provider>
    </div>
  );
};

export default App;
