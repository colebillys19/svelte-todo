import { writable } from "svelte/store";

import TodoList from "./classes/TodoList";

const store = {
  addInputValue: writable(""),
  editId: writable(""),
  editInputValue: writable(""),
  todoList: new TodoList(),
};

export default store;
