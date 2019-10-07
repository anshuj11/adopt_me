import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
      <div></div>
      <Pet name="Mozic" animal="Dog" breed="GullyBoy" />
      <Pet name="Barb" animal="Cat" breed="Bird" />
      <Pet name="Luna" animal="Dog" breed="Havanese" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
