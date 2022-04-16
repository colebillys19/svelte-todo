<script lang="ts">
	import { fade } from 'svelte/transition';

	import store from '../store';
	import TodoForm from '../components/TodoForm/TodoForm.svelte';
	import TodoTable from '../components/TodoTable/TodoTable.svelte';
	// import Temp from '../components/Temp/Temp.svelte';

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
			<TodoForm isEdit />
		</div>
	{/if}
	<!-- <Temp /> -->
</main>

<style src="./App.css" scoped></style>
