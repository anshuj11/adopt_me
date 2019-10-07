import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Mozic",
      animal: "Dog",
      breed: "GullyBoy"
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, { name: "Pepper", animal: "Cat", breed: "Bird" })
  );
};
render(React.createElement(App), document.getElementById("root"));
