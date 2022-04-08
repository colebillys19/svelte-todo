<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import type Todo from '../../types/Todo';

  export let todos: Array<Todo> = [];
  
  const dispatch = createEventDispatcher();
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
    {#each todos as todo (todo.id)}
      <tr>
        <td>
          <button on:click={() => dispatch('edit-click', todo.id)}>
            edit
          </button>
        </td>
        <td>{todo.task}</td>
        <td>{todo.isDone ? "done" : "todo"}</td>
        <td>
          <button on:click={() => dispatch('delete-click', todo.id)}>
            delete
          </button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style src="./TodoTable.css" scoped></style>
