import { action, observable } from "mobx";

class Todo {
  @observable todoDescription;
  @action setTodoDescription = description => {
    this.todoDescription = description;
  };
}
export default Todo;
