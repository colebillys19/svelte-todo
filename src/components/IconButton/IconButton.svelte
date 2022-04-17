<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let ariaLabel = "";

  const handleClick = () => {
    dispatch("click");
  };
</script>

<button on:click|preventDefault={handleClick} aria-label={ariaLabel}>
  <slot />
</button>

<style src="./IconButton.css"></style>
