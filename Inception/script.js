const parent = React.createElement("div", { id: "heading1" }, [
  React.createElement("div", { id: "parent-div1" }, [
    React.createElement("h1", { id: "heading1" }, "This is Heading 1"),
    React.createElement("h2", { id: "heading2" }, "This is Heading 2"),
  ]),
  React.createElement("div", { id: "parent-div2" }, [
    React.createElement("h1", { id: "heading1" }, "This is Heading 1"),
    React.createElement("h2", { id: "heading2" }, "This is Heading 2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
