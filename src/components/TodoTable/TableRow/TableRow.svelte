<script lang="ts">
  import store from "../../../store";

  export let todo = { id: "", isDone: false, task: "" };

  const { editId, todoList } = store;
</script>

<tr>
  <td>
    <button on:click={() => editId.update(() => todo.id)}> edit </button>
  </td>
  <td>{todo.task}</td>
  <td>
    <button on:click={() => todoList.toggleStatus(todo.id)}>
      {todo.isDone ? "done" : "todo"}
    </button>
  </td>
  <td>
    <button on:click={() => todoList.deleteTodo(todo.id)}> delete </button>
  </td>
</tr>

<style src="./TableRow.css" scoped></style>
