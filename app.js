import React from "react";
import ReactDOM from "react-dom/client";

// This is a React Element
const title = (
  <div>
    <h1>Namaste React Element</h1>
  </div>
);

const TitleComponent = () => (
  <div>
    <h1>Namaste React Component</h1>
  </div>
);

// This is a React Component
const Header = () => {
  return (
    <div>
      {/* to use a react element we wrap it inside curly braces */}
      {title}
      {/* to use a react component we wrap it inside angular brackets */}
      <TitleComponent />
      {/* to use a react component we can also wrap it inside curly braces and call it as normal function */}
      {TitleComponent()}
      <h2>Header</h2>
    </div>
  );
};

// This is another representation of Header component without using curly braces and return
const HeaderCopy = () => (
  <div>
    <h2>Header</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(title);
root.render(<Header />);
