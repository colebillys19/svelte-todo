<script lang="ts">
  import store from "../../../store";
  import PenIcon from "../../Icons/PenIcon.svelte";
  import TrashIcon from "../../Icons/TrashIcon.svelte";
  import IconButton from "../../IconButton/IconButton.svelte";

  export let todo = { id: "", isDone: false, task: "" };

  const { editId, todoList } = store;
</script>

<tr>
  <td>
    <!-- <button on:click={() => editId.update(() => todo.id)}></button> -->
    <IconButton>
      <PenIcon />
    </IconButton>
  </td>
  <td>{todo.task}</td>
  <td>
    <button
      on:click={() => todoList.toggleStatus(todo.id)}
      class={`statusButton ${todo.isDone ? "lineThroughText" : ""}`}
    >
      {todo.isDone ? "done" : "todo"}
    </button>
  </td>
  <td>
    <!-- <button on:click={() => todoList.deleteTodo(todo.id)}></button> -->
    <IconButton>
      <TrashIcon />
    </IconButton>
  </td>
</tr>

<style src="./TableRow.css"></style>
