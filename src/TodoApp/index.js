import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { TodoAppBg } from "./styledComponents";
import TodoButtonComponent from "./TodoButtonComponent";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

@inject("todoStore", "todo")
@observer
class TodoApp extends Component {
  todo;
  constructor(props) {
    super(props);
    this.state = { edit: false };
  }
  handleTodoItemEdit = (editTodoStatus, todo) => {
    this.setState({ edit: editTodoStatus });
    this.todo = todo;
  };
  handleTodoInputChange = description => {
    this.props.todoStore.addTodo(description);
  };
  handleEditChange = () => {
    this.setState({ editTodo: !this.state.editTodo });
  };
  handleClearCompleted = () => {
    this.props.todoStore.clearCompleted();
  };
  render() {
    return (
      <TodoAppBg>
        <TodoInput onTodoInput={this.handleTodoInputChange} />
        {this.state.editTodo ? (
          <>
            <TodoInput
              edit={this.state.edit}
              todo={this.todo}
              onTodoInput={this.handleTodoInputChange}
              onTodoEdit={this.handleEditChange}
            />
          </>
        ) : (
          ""
        )}
        <TodoList onTodoItem={this.handleTodoItemEdit} />
        <TodoButtonComponent onClearCompleted={this.handleClearCompleted} />
      </TodoAppBg>
    );
  }
}
export default TodoApp;
