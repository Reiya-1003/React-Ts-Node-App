import React, { useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchterm] = useState("");

  const apiKey = process.env.REACT_APP_API;

  handleSubmit = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=`);
  };

  return (
    <div className="App">
      <Nav />
      <Seathbox />
    </div>
  );
}

export default App;
