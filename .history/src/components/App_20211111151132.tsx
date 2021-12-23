import React, { createContext, useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";

export const MovieContext = createContext();

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Seathbox />
    </div>
  );
};

export default App;
