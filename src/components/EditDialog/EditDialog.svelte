<script lang="ts">
  import store from '../../store';
  import TodoForm from '../TodoForm/TodoForm.svelte';

  const { editId } = store;

  const closeDialog = () => editId.update(() => '');
</script>

<div on:click={closeDialog} class="dialogContainer">
  <dialog on:click|stopPropagation={() => null} open>
    <button on:click={closeDialog}>close</button>
    <TodoForm isEdit />
  </dialog>
</div>

<style src="./EditDialog.css" scoped></style>
