<script lang="ts">
    export let pageTitle: string;
    export let pageDescription: string;
    export let image: string;
    
  </script>
  
  <svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content="{pageDescription}" />
    <meta property="og:title" content="{pageTitle}" />
    <meta property="og:description" content="{pageDescription}" />
    {#if image}
        <meta property="og:image" content="{image}" />
    {/if}
    <meta name="twitter:title" content="{pageTitle}" />
    <meta name="twitter:description" content="{pageDescription}" />
    {#if image}
        <meta name="twitter:image" content="{image}" />
    {/if}
    
  </svelte:head>