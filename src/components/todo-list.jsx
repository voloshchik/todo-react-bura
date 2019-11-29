import React from "react";
import TodoListitem from "./todo-list-item";

const Todolist = () => {
  const items = ["Drink Coffee", "Build Awesome App"];
  return (
    <ul>
      <li><TodoListitem/></li>
      <li><TodoListitem/></li>
    </ul>
  );
};
export default Todolist;
