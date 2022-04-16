<script lang="ts">
  import store from '../../store';
  import TableRow from './TableRow/TableRow.svelte';

  const { todoList } = store;
  const todos = todoList.getTodos();
</script>

<table>
  <thead>
    <tr>
      <td></td>
      <td>task</td>
      <td>status</td>
      <td></td>
    </tr>
  </thead>
  <tbody>
    {#each $todos as todo (todo.id)}
      <TableRow todo={todo} />
    {/each}
  </tbody>
</table>

<style src="./TodoTable.css" scoped></style>
