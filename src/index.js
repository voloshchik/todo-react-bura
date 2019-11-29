import React from "react";
import ReactDom from "react-dom";
import Todolist from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/serach-panel";

const App = () => {
  return (
    <div>
      <span>{new Date().toString()}</span>
      <AppHeader />
      <SearchPanel />
      <Todolist />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
