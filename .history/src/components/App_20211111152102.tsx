import React, { createContext, useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";

export const MovieContext = createContext([]);

const App = () => {
  const [movies, setMovies] = useState<any>([]);
  return (
    <div className="App">
      <MovieContext.Provider value={movies}></MovieContext.Provider>
      <Nav />
      <Seathbox />
    </div>
  );
};

export default App;
