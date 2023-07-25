<script>
    import { enhance } from "$app/forms";
  
  </script>
  
  
  
  <main>
    
    <div class="grid">
      <div class="col-6 col-3-s">
        <h1>Create a New Post</h1>
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
  
  </main>
  
  