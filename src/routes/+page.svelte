<script lang="ts">
  import type { PageServerData } from "./$types";

    export let data: PageServerData
   const { posts } = data
    
</script>
<main id="main">
  <div class="grid">
    <div class="col-2 hide-m"></div>
    {#each posts as post}
      <article class="col-4">
          <h2>{post.title}</h2>
          <p class="content">
              {post.content}
          </p>
      </article>
    {/each}
  </div>

</main>

<style lang="scss">
  article {
    background-color: var(--base-100);
    padding: 2rem;
    border-radius: 1.2rem;
    box-shadow: 0 1px 4rem rgba(0, 0, 0, 0.1);
  }

</style>


