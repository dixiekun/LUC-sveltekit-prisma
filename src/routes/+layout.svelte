<script lang="ts">
  import Footer from '$components/Footer/Footer.svelte';
  import Header from '$components/Header/Header.svelte';
  import SlideIn from '$components/PageTransitions/SlideIn.svelte';
  import '$lib/styles/global.scss';
  import type { LayoutServerData } from './$types';


  export let data:LayoutServerData;



</script>


<a href="#main" class="skip-to-main-content-link">Skip to main content</a>

<Header/>
<SlideIn pathname={data.pathname}>
  <main id="main">
    <slot/>
  </main>
</SlideIn>
<Footer/>

<style>
  .skip-to-main-content-link {
      position: absolute;
      font-size: var(--text-s);
      left: -9999px;
      z-index: 999;
      padding: 1em;
      background-color: var(--color-system-blue);
      color: white;
      opacity: 0;
  }
  .skip-to-main-content-link:focus {
      left: 10%;
      transform: translateX(-50%);
      opacity: 1;
  }
</style>