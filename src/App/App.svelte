<script lang="ts">
  import { fade } from "svelte/transition";

  import store from "../store";
  import PlusIcon from "../iconComponents/PlusIcon.svelte";
  import EditDialog from "../components/EditDialog/EditDialog.svelte";
  import TodoForm from "../components/TodoForm/TodoForm.svelte";
  import TodoTable from "../components/TodoTable/TodoTable.svelte";

  const { addInputValue, editId, todoList } = store;
  const todos = todoList.getTodos();

  const handleAddTodo = () => {
    if ($addInputValue) {
      todoList.addTodo($addInputValue);
      addInputValue.update(() => "");
    }
  };
</script>

<main>
  <h1>Svelte Todo</h1>
  <TodoForm
    bind:inputValue={$addInputValue}
    on:submit={handleAddTodo}
    buttonAriaLabel="add todo"
    labelText="add todo"
  >
    <span slot="icon">
      <PlusIcon />
    </span>
  </TodoForm>
  {#if $todos.length}
    <TodoTable />
  {/if}
  {#if $editId}
    <div in:fade={{ duration: 100 }}>
      <EditDialog />
    </div>
  {/if}
</main>

<style src="./App.css"></style>
