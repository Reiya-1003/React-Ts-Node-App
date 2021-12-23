import React, { useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";
import Row from "../Row";

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={Requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={Requests.feactTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.feactActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.feactComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.feactHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.feactRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={Requests.feactDocumentMovies} />

      <Nav />

      <Seathbox />
    </div>
  );
}

export default App;
