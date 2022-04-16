<script lang="ts">
  import store from '../../store';
  
  const { addInputValue, editId, editInputValue, todoList } = store;

  export let isEdit = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      todoList.updateTask($editInputValue, $editId);
      editInputValue.update(() => '');
      editId.update(() => '');
    } else {
      todoList.addTodo($addInputValue);
      addInputValue.update(() => '');
    }
  };
</script>

<form>
  <label for="todo">{isEdit ? 'edit' : 'add'} todo:</label>
  <div>
    {#if isEdit}
      <input bind:value={$editInputValue} id="todo" type="text">
    {:else}
      <input bind:value={$addInputValue} id="todo" type="text">
    {/if}
    <button on:click={handleSubmit}>
      {isEdit ? 'update' : 'add'}
    </button>
  </div>
</form>

<style src="./TodoForm.css" scoped></style>
