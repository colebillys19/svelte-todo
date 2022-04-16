<script lang="ts">
	import { fade } from 'svelte/transition';

	import store from '../store';
	import EditDialog from '../components/EditDialog/EditDialog.svelte';
	import TodoForm from '../components/TodoForm/TodoForm.svelte';
	import TodoTable from '../components/TodoTable/TodoTable.svelte';

	const { editId, todoList } = store;
  const todos = todoList.getTodos();
</script>

<main>
	<h1>Svelte Todo</h1>
	<TodoForm />
	{#if $todos.length}
		<TodoTable />
	{/if}
	{#if $editId}
		<div in:fade>
			<EditDialog />
		</div>
	{/if}
</main>

<style src="./App.css" scoped></style>
