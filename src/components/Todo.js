import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, text: this.props.todo.text };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo.id);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.updateTodo(this.props.todo.id, this.state.text);
    this.setState({ isEditing: false });
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleToggle(event) {
    this.props.toggleTodo(this.props.todo.id);
  }

  render() {
    // console.log(this.props.todo.id, this.state.text);
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.todo.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleToggle}
          >
            {this.props.todo.text}
          </li>

          <button onClick={this.toggleForm}>
            <i class="fas fa-pen" />
          </button>
          <button onClick={this.handleDelete}>
            <i class="fas fa-trash" />
          </button>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
