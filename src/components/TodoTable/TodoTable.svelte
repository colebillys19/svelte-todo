<script lang="ts">
  import store from "../../store";
  import TableRow from "./TableRow/TableRow.svelte";

  const { todoList } = store;
  const todos = todoList.getTodos();
</script>

<table cellspacing="0">
  <thead>
    <tr>
      <th />
      <th>task</th>
      <th>status</th>
      <th />
    </tr>
  </thead>
  <tbody>
    {#each $todos as todo (todo.id)}
      <TableRow {todo} />
    {/each}
  </tbody>
</table>

<style src="./TodoTable.css"></style>
