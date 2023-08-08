<script lang="ts">
        type Mode = 
        | 'dark'
        |'light'

    export let mode: Mode = 'light';

    
</script>


{#if mode =='dark'}
    <a href="/"><img src="/luc-logo-dm.svg" alt="Lucid clean logo"></a>
{:else}
    <a href="/"><img src="/LUC-logo.svg" alt="Lucid clean logo"></a>
{/if}

