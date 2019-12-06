import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter/";
import "./app";
import ItemAddForm from "../item-add-form/index";
class App extends React.Component {
  maxId = 100;
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Make Awesome App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 }
    ]
  };
  onToggleImportant = id => {
    console.log("Toggle Important",id );
  };
  onToggleDone = id => {
    console.log("Toggle Done", id);
  };
  deletedItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      console.log(idx);
      // const before = todoData.slice(0, idx);
      // const after = todoData.slice(idx + 1);
      // const newArray=[...before,...after]
      // return {
      //   todoData:newArray
      // }
      return {
        ...todoData,
        ...todoData.splice(idx, 1)
      };
    });
  };
  addItem = text => {
    // console.log("Added", text);
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };
    this.setState(({ todoData }) => {
      // const newArr = [...todoData, newItem];
      return {
        ...todoData,
        todoData: [...todoData, newItem]
        // todoData: [...todoData, newItem]
      };
    });
  };
  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          todos={this.state.todoData}
          onDeleted={this.deletedItem}
        />
        <ItemAddForm onItemAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
