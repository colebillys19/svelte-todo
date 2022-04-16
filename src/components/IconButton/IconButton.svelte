<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    dispatch("click");
  };
</script>

<button on:click|preventDefault={handleClick}>
  <slot />
</button>

<style src="./IconButton.css"></style>
