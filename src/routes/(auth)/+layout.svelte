<script lang="ts">
  import AdminFooter from "$components/Footer/Admin_footer.svelte";
  import AdminHeader from "$components/Header/Admin_header.svelte";
  import {fly} from "svelte/transition"


</script>
<div class="admin-wrapper">
  <AdminHeader/>
  <main transition:fly="{{ y: 50 }}">
      <slot/>
  </main>
</div>



<style lang="scss">
  .admin-wrapper {
    display: grid;
    grid-template-columns: min(18rem, 100%) auto;
    min-height: 100dvh;
  }

  main {
    font-family: var(--system-ui);
    font-size: var(--text-s);
    background-color: var(--color-base-100);
    padding: var(--space-xxl);
  }
</style>