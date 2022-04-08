<script lang="ts">
	import TodoForm from '../components/TodoForm/TodoForm.svelte';
	import TodoTable from '../components/TodoTable/TodoTable.svelte';
	import { getId } from '../helpers';

	$: addInputValue = '';
	$: todos = [
		{ id: getId(), isDone: false, task: 'this is the first task' },
		{ id: getId(), isDone: true, task: 'this is the second task' },
		{ id: getId(), isDone: false, task: 'this is the third task' },
	];

	const handleAddInput = (e: CustomEvent): void => {
		addInputValue = e.detail;
	}

	const handleDeleteClick = (e: CustomEvent): void => {
		todos = todos.filter(({ id }) => id !== e.detail);
	}

	const handleEditClick = (e: CustomEvent): void => {
		const { task } = todos.find(({ id }) => id === e.detail);
		console.log(task);
	}

	const handleFormSubmit = (): void => {
		todos = [
			...todos,
			{ id: getId(), isDone: false, task: addInputValue },
		];
		addInputValue = '';
	}
</script>

<main>
	<h1>Svelte Todo</h1>
	<TodoForm
		on:add-input={handleAddInput}
		on:form-submit={handleFormSubmit}
		inputValue={addInputValue}
	/>
	<TodoTable
		on:delete-click={handleDeleteClick}
		on:edit-click={handleEditClick}
		todos={todos}
	/>
</main>

<style src="./App.css" scoped></style>
