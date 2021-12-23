import React, { useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";

type MovieData = [
  {
    data: string;
  }
];

const App: React.FC = (props: any) => {
  const [movies, setMovies] = useState<MovieData>([]);
  const [searchTerm, setSearchterm] = useState("");

  const apiKey = process.env.REACT_APP_API;

  handleSubmit = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        setMovies({ movies: [...data.results] });
      });
  };

  return (
    <div className="App">
      <Nav />
      <Seathbox />
    </div>
  );
};

export default App;
