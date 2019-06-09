import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  addNewTodo(text) {
    this.setState({
      todos: [...this.state.todos, text]
    });
  }
  deleteTodo(id) {
    let newTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos: newTodos });
  }

  updateTodo(id, text) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: text };
      } else {
        return todo;
      }
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    console.log(this.state.todos);
    let todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
          toggleTodo={this.toggleCompletion}
        />
      );
    });
    return (
      <div className="TodoList">
        <h1>
          React Todo List <span>A Simple React Todo List App.</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm addNewTodo={this.addNewTodo} />
      </div>
    );
  }
}

export default TodoList;
