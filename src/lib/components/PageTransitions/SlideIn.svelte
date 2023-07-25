<script lang="ts">
    import { fly } from 'svelte/transition'

    export let pathname: string;
  
  </script>
  
  
  {#key pathname}
    <div
    in:fly={{ x:300, delay:400 }} out:fly={{ x: -400, duration:200 }}
    >
      <slot />
    </div>
  {/key}