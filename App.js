import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "all this are attributes" },
  "Hello World from Namste React"
);

const Title =() => (

  <h1> This is Title</h1>
  );

// ************************OR******************
// HTML like syntax but its not HTML inside JS
// JSX( transpilled befoe it reaches the JS) PARCEL -> BABEL(can be called as JS-complier/transpiler)
// jsx => react.creatElement => ReactEleemnt-js-Object=> HTMLElement(render)
const jsxHeading = <h1 id="heading-2">Namste React From JSX</h1>;
const JsxHeading1 = () => <h1 id="heading-2">Namste React From JSX</h1>;

// React Component
// class based component - OLD
// Functional  component - NEW

// functional comp
// *************component Compositon => combing 2 or more comp******
const HeadingComponent = () => {
  return (
    <div id="container">
      
      {Title()}
      <Title />
      <Title></Title>
        <JsxHeading1 / >   
           <h1 className="heading"> Namste React From Functinal Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("React.createElement is an object", heading);
// root.render(heading);
root.render(jsxHeading);
root.render(<HeadingComponent />);
