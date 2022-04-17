<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  import IconButton from "../IconButton/IconButton.svelte";

  const dispatch = createEventDispatcher();

  export let inputValue = "";
  export let labelText = "";

  let inputElement;

  onMount(() => {
    inputElement.focus();
  });

  const handleSubmit = () => {
    dispatch("submit");
  };
</script>

<form>
  <label for="todo">{labelText}</label>
  <div>
    <input
      bind:this={inputElement}
      bind:value={inputValue}
      id="todo"
      type="text"
    />
    <IconButton on:click={handleSubmit}>
      <slot name="icon" />
    </IconButton>
  </div>
</form>

<style src="./TodoForm.css"></style>
