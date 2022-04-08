<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let inputValue: string = '';
  
  const dispatch = createEventDispatcher();

  const handleInput = (e) => {
    dispatch('add-input', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch('form-submit');
  };
</script>

<form>
  <label for="todo">add todo:</label>
  <div>
    <!-- <input bind:value={inputValue} id="todo" type="text"> -->
    <input on:input={handleInput} id="todo" type="text" value={inputValue}>
    <button on:click={handleSubmit}>
      add
    </button>
  </div>
</form>

<style src="./TodoForm.css" scoped></style>
