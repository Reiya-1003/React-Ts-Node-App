import React, { useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";

const App: React.FC = (props: any) => {
  return (
    <div className="App">
      <Nav />
      <Seathbox />
    </div>
  );
};

export default App;
