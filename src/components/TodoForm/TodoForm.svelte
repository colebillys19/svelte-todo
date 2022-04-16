<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import IconButton from "../IconButton/IconButton.svelte";

  export let inputValue = "";
  export let labelText = "";

  const dispatch = createEventDispatcher();

  const handleSubmit = () => {
    dispatch("submit");
  };
</script>

<form>
  <label for="todo">{labelText}</label>
  <div>
    <input bind:value={inputValue} id="todo" type="text" />
    <IconButton on:click={handleSubmit}>
      <slot name="icon" />
    </IconButton>
  </div>
</form>

<style src="./TodoForm.css"></style>
