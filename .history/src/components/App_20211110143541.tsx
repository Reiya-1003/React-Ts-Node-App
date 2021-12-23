import React, { useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchterm] = useState("");

  const apiKey = process.env.REACT_APP_API;

  handleSubmit = () => {
    fetch(``);
  };

  return (
    <div className="App">
      <Nav />
      <Seathbox />
    </div>
  );
}

export default App;
