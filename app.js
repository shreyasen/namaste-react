const heading = React.createElement("h1", {}, "Hello");
const heading2 = React.createElement("h2", {}, "world");
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
