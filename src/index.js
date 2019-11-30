import React from "react";
import ReactDom from "react-dom";
import Todolist from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/serach-panel";

const App = () => {
  const todoData=[
    {label:'Drink Coffee',important:false,id:1},
    {label:'Make Awesome app',important:true,id:2},
    {label:'Have a lunch',important:false,id:3}
  ]
  return (
    <div>
      <span>{new Date().toString()}</span>
      <AppHeader />
      <SearchPanel />
      <Todolist todos={todoData} />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
