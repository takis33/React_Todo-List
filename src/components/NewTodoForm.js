import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import "./NewTodoForm";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", id: uuidv4(), completed: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value, id: uuidv4() });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewTodo(this.state);
    this.setState({ text: "", id: uuidv4(), completed: false });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <input
          placeholder="New Todo"
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button type="submit">ADD TODO</button>
      </form>
    );
  }
}

export default NewTodoForm;
