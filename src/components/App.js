import React, { Component } from "react";
import TodoList from "./TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <br />

        <h1>Todo List!</h1>
        <h5>A Simple React Todo List App.</h5>
        <TodoList />
      </div>
    );
  }
}

export default App;
