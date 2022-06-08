import { writable } from "svelte/store";

import { getId } from "../helpers";

class TodoList {
  public todos = writable([]);

  addTodo(task: string) {
    const id = getId();
    const newTodo = { id, isDone: false, task };
    this.todos.update((todos) => [...todos, newTodo]);
  }

  deleteTodo(targetId: string) {
    this.todos.update((todos) => todos.filter(({ id }) => id !== targetId));
  }

  getTodos() {
    return this.todos;
  }

  toggleStatus(targetId: string) {
    this.todos.update((todos) =>
      todos.map((todo) => {
        const { id, isDone, task } = todo;
        if (id === targetId) {
          return { id, isDone: !isDone, task };
        }
        return todo;
      })
    );
  }

  updateTask(newTask: string, targetId: string) {
    this.todos.update((todos) =>
      todos.map((todo) => {
        const { id, isDone } = todo;
        if (id === targetId) {
          return { id, isDone, task: newTask };
        }
        return todo;
      })
    );
  }
}

export default TodoList;
