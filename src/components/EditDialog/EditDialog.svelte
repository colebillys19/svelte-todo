<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import store from "../../store";
  import TodoForm from "../TodoForm/TodoForm.svelte";

  const { editId } = store;

  onMount(() => {
    window.addEventListener("keyup", handleEsc);
  });

  onDestroy(() => {
    window.removeEventListener("keyup", handleEsc);
  });

  const closeDialog = () => editId.update(() => "");

  const handleEsc = (e) => {
    if (e.key === "Escape") {
      closeDialog();
    }
  };
</script>

<div on:click={closeDialog} class="dialogContainer">
  <dialog on:click|stopPropagation={() => null} open>
    <button on:click={closeDialog}>close</button>
    <TodoForm isEdit />
  </dialog>
</div>

<style src="./EditDialog.css" scoped></style>
