<script lang="ts">
  import store from "../../../store";
  import PenIcon from "../../../iconComponents/PenIcon.svelte";
  import TrashIcon from "../../../iconComponents/TrashIcon.svelte";
  import IconButton from "../../IconButton/IconButton.svelte";

  const { editId, todoList } = store;

  export let todo = { id: "", isDone: false, task: "" };

  const handleSetEditId = () => {
    editId.update(() => todo.id);
  };

  const handleDeleteTodo = () => {
    todoList.deleteTodo(todo.id);
  };
</script>

<tr>
  <td>
    <IconButton on:click={handleSetEditId} ariaLabel="edit todo">
      <PenIcon />
    </IconButton>
  </td>
  <td>{todo.task}</td>
  <td>
    <button
      on:click={() => todoList.toggleStatus(todo.id)}
      aria-label={`toggle todo status, current status: ${
        todo.isDone ? "done" : "todo"
      }`}
      class={`statusButton ${todo.isDone ? "lineThroughText" : ""}`}
    >
      {todo.isDone ? "done" : "todo"}
    </button>
  </td>
  <td>
    <IconButton on:click={handleDeleteTodo} ariaLabel="delete todo">
      <TrashIcon />
    </IconButton>
  </td>
</tr>

<style src="./TableRow.css"></style>
