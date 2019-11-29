import React from "react";
import ReactDom from "react-dom";
const Todolist = () => {
  const items = ["Drink Coffee", "Build Awesome App"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};
const AppHeader = () => {
  return <h1>My Todo list</h1>;
};
const SearchPanel = () => {
    const serachStyle={
        fontSize:'25px'
    }
  return <input
  style={serachStyle} 
   placeholder="search" />;
};
const App = () => {
  return (
    <div>
      <span>{(new Date()).toString()}</span>
      <AppHeader />
      <SearchPanel />
      <Todolist />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
