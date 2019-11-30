import React from "react";
import TodoListitem from "./todo-list-item";

const Todolist = ({ todos }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={item.id}>
        <TodoListitem {...itemProps} />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};
export default Todolist;
