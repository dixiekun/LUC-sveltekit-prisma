<script lang="ts">
    import Loader from '$components/PageTransitions/loader.svelte';
    import '$lib/styles/global.scss'
    import {loading} from '$lib/stores/loading'
    import { navigating } from '$app/stores';
    import { onMount } from 'svelte';

    let isPageLoaded = false

    $: $loading = !!$navigating

    onMount(() => {
    isPageLoaded = true
    })

</script>

<slot/>
{#if $loading || !isPageLoaded}
  <Loader/>
{/if}