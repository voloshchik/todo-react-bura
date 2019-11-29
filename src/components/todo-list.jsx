import React from "react";
import TodoListitem from "./todo-list-item";

const Todolist = ({ todos }) => {
  const elements = todos.map(item => {
    return (
      <li>
        <TodoListitem {...item} />
      </li>
    );
  });
  
  return (
    <ul>
      {elements}
      
    </ul>
  );
};
export default Todolist;
