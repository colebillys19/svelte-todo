<script lang="ts">
  import store from '../../store';
  const handleClick = () => {
    console.log(store);
  };
</script>

<button on:click={handleClick}>log store</button>
