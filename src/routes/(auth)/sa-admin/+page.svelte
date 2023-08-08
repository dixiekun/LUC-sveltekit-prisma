<script lang="ts">
  import Button from '$components/Ui/Button.svelte';
import PostsTable from '$components/Ui/PostsTable.svelte';
  import SearchBar from '$components/Ui/SearchBar.svelte';
  import { onMount } from 'svelte';

  export let data

  let filteredPosts: any[] = []


  onMount(() => {
    filteredPosts = data.posts;
  })

  // Listen for the "search-results" event emitted by the SearchBox component
  function handleSearchResults(event:CustomEvent) {
    filteredPosts = event.detail;
  }

</script>

<section>
  <div class="grid">
    <div class="col-2 col-3-s">
      <h1>Posts</h1>
      <p class="subtitle">All the posts here.</p>
    </div>
    <div class="col-10 col-4-m right">
      <Button label="New Post" type="new"/>
    </div>
    <div class="col-6 col-3-s">
      <SearchBar on:search-results={handleSearchResults} posts={data.posts}/>
    </div>
    <div class="col-12 col-6-m col-3-s">
      <PostsTable posts={filteredPosts}/>
    </div>
  </div>
</section>


<style lang="scss">
  section {
    background-color: white;
    border-radius: var(--border-radius);
    padding: var(--space-l) var(--space-l) var(--space-xxl) var(--space-l);
    min-height: 86dvh;
  }


  h1 {
    font-size: var(--text-m);
    font-family: var(--system-ui);
  }

  .subtitle {
    color: var(--color-base-300);
    font-size: var(--text-14);
  }

  .right {
    display: flex;
    justify-content: flex-end;
  }

</style>