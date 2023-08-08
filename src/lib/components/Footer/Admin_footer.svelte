<script lang="ts">
  import { onMount } from "svelte";


  let currentYear:number;


    onMount(() => {
        const now = new Date();
        currentYear = now.getFullYear();
    });
</script>

<footer class="admin-footer">
    <div class="grid">
        {#if currentYear}
            <div class="col-12 col-6-m col-3-s center">
                <span>© 2014-{currentYear} lucidclean.com</span>
            </div>
        {/if}
    </div>
</footer>

<style lang="scss">
    .admin-footer {
        padding-block: var(--space-base);
    }

    
    .center {
        display: grid;
        place-items: center;

        span {
            font-size: var(--text-xxs);
        }
    }

</style>