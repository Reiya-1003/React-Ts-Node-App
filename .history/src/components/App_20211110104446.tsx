import React from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <Nav />
      <Seathbox />
    </div>
  );
}

export default App;
