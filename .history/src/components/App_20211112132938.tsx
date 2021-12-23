import React, { createContext, useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";
import Movielist from "./MovieList";

export const MovieContext = createContext<any>({});
export const SerchContext = createContext<any>("");

const App = () => {
  const [movies, setMovies] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<any>("");

  return (
    <div className="App">
      <MovieContext.Provider value={movies}>
        <SerchContext.Provider value={searchTerm}>
          <Nav />
          <Seathbox />
          <Movielist />
        </SerchContext.Provider>
      </MovieContext.Provider>
    </div>
  );
};

export default App;
