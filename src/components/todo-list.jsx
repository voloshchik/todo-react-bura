import React from "react";
import TodoListitem from "./todo-list-item";

const Todolist = () => {
  const items = ["Drink Coffee", "Build Awesome App"];
  return (
    <ul>
      <li>
        <TodoListitem label="Drink Coffee" />
      </li>
      <li>
        <TodoListitem important label="Build Awesome App" />
      </li>
    </ul>
  );
};
export default Todolist;
