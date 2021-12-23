import React, { createContext, useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";

export const MovieContext = createContext<any>([]);
export const SerchContext = createContext<any>("");

const App = () => {
  const [movies, setMovies] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<any>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMovies({ movies: [data.results] });
        console.log(movies);
      });
  };
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
