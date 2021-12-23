import React, { useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";

type MovieData = {
  data: string;
};

const App: React.FC = (props: any) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchterm] = useState("");

  const apiKey = process.env.REACT_APP_API;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMovies({ movies: [...data.results] });
      });
  };
  const handleChange = (e) => {
    setSearchterm({ searchTerm: e.target.value });
  };

  return (
    <div className="App">
      <Nav />
      <Seathbox handleSubmit={handleSubmit(e)} handleChange={handleChange(e)} />
    </div>
  );
};

export default App;
