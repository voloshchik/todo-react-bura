import React from "react";
import ReactDom from "react-dom";
const Todolist = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};
const AppHeader = () => {
  return <h1>My Todo list</h1>;
};
const SearchPanel = () => {
  return <input placeholder="search" />;
};
const App=()=>{
    return (
        <div>
        <AppHeader />
        <SearchPanel />
        <Todolist />
      </div>
    )
}

ReactDom.render(<App/>, document.getElementById("root"));
