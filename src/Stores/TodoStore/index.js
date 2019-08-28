import { action, observable } from "mobx";
import Todo from "../Model/Todo";

class TodoStore{
    @observable todos=[];
    @action addTodo=(description)=>{
        const todo=new Todo();
        todo.setTodoDescription(description);
        this.todos.push(todo);
    }
}
export default TodoStore;