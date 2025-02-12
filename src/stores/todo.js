import { defineStore } from "pinia";

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todos: JSON.parse(localStorage.getItem('todos')) || [], 
    }),
    actions: {
        addTodo(text) {
            const newTodo = {text: text, done: false};
            this.todos.push(newTodo);
            this.saveTodos();
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
            this.saveTodos();
        },
        toggleTodo(index) {
            this.todos[index].done = !this.todos[index].done;
            console.log(this.todos[index]);
            this.saveTodos();
        },
        saveTodos() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
    },
});