import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1",{id:"heading"},"REACT 🚀🚀🚀")
// JSX => Babel transpiles to  React.createElement => ReactElement -Js Object => HTMLElement(render)
const jsxHeading = (<h1 id="heading">
  Heading by JSX 🚀
  </h1>);

// React Component



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
