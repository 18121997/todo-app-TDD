import TodoStore from ".";
import Todo from "../Todo";

describe('TodoStore testsuit', () => {
    it('should test addTodo function',()=>{
        const todoStore=new TodoStore();
        todoStore.addTodo('mani');
        expect(todoStore.todos.length).toBe(1);
        expect(todoStore.todos[0].todoDescription).toBe('mani');
    })
    it('should test deleteTodo function',()=>{
        const todoStore=new TodoStore();
        const todo=new Todo();
        todoStore.addTodo('mani');
        todo.setTodoDescription('mani');
        todoStore.deleteTodo(todo);
        expect(todoStore.todos.length).toBe(0);
    })
    it('should test clearCompleted function',()=>{
        const todoStore=new TodoStore();
        todoStore.addTodo('mani');
        todoStore.todos[0].setTodoIsCompleted();
        todoStore.clearCompleted();
        expect(todoStore.todos.length).toBe(0);
    })
    it('should test setApplyFilterType',()=>{
        const todoStore=new TodoStore();
        todoStore.setApplyFilterType('All');
        expect(todoStore.applyFilterType).toBe('All');
    })
    it('should test todosItemsLeft',()=>{
        const todoStore=new TodoStore();
        todoStore.addTodo('mani');
        todoStore.todos[0].setTodoIsCompleted();
        expect(todoStore.todosItemsLeft).toBe(0);
    })
    it('should test for appliedFilterList',()=>{
        const todoStore=new TodoStore();
        todoStore.addTodo('mani');
        todoStore.addTodo('deep');
        todoStore.addTodo('hiii');
        todoStore.todos[1].setTodoIsCompleted();
        todoStore.setApplyFilterType('Active');
        expect(todoStore.appliedFilterList.length).toBe(2);
    })
})
