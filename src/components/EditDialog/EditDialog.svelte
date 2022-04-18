<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  import store from "../../store";
  import CheckIcon from "../../iconComponents/CheckIcon.svelte";
  import TimesIcon from "../../iconComponents/TimesIcon.svelte";
  import TodoForm from "../TodoForm/TodoForm.svelte";

  const { editId, editInputValue, todoList } = store;

  onMount(() => {
    window.addEventListener("keyup", handleEsc);
  });

  onDestroy(() => {
    window.removeEventListener("keyup", handleEsc);
  });

  const closeDialog = () => {
    editId.update(() => "");
    editInputValue.update(() => "");
  };

  const handleEsc = (e) => {
    if (e.key === "Escape") {
      closeDialog();
    }
  };

  const handleUpdateTodo = () => {
    if ($editInputValue) {
      todoList.updateTask($editInputValue, $editId);
      editInputValue.update(() => "");
      editId.update(() => "");
    }
  };
</script>

<div on:click={closeDialog} class="dialogContainer">
  <dialog on:click|stopPropagation={() => null} open>
    <button
      on:click={closeDialog}
      aria-label="close dialog"
      class="closeButton"
    >
      <TimesIcon />
    </button>
    <TodoForm
      bind:inputValue={$editInputValue}
      on:submit={handleUpdateTodo}
      buttonAriaLabel="update todo"
      labelText="edit todo"
    >
      <span slot="icon">
        <CheckIcon />
      </span>
    </TodoForm>
  </dialog>
</div>

<style src="./EditDialog.css"></style>
