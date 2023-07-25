<script>
  import { enhance } from "$app/forms";

</script>



<main>
  <section>
    <div class="grid">
      <div class="col-3 hide-s">
        <h1>Welcome to your dashboard</h1>
        <form action="?/createPost" use:enhance method="POST">
          <div>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div>
            <label for="content">Content:</label>
            <textarea id="content" name="content" rows="5" required />
          </div>
          <button type="submit">Add Post</button>
        </form>
      </div>
    </div>
  </section>
</main>

<style lang="scss">
  main {
    font-family: var(--system-ui);
    font-size: var(--text-s);
  }

  h1 {
    font-size: var(--text-m);
    font-family: var(--system-ui);
    
  }

</style>