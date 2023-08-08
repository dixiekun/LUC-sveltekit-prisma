<script lang="ts">
  import IconFilter from "$components/Icons/icon_filter.svelte";
  import Button from "./Button.svelte";

  interface Category {
    name: string
  }

  interface Author {
    name: string
  }

  interface Post {
      title: string;
      author: Author;
      categories: Category[];
      dateCreated: string;
      status: string;
      createdAt: string;
  }
  export let posts: Post[];

  
  
</script>

<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Category</th>
      <th>Date Created</th>
      <th>Status</th>
      <th>
        <button class="filter">Filters <IconFilter/></button>
      </th>
    </tr>
  </thead>
  <tbody>
    {#each posts as post}
      <tr>
        <td>{post.title}</td>
        <td>{post.author.name}</td>
        <td class="category">
          {#each post.categories as category}
            {category.name}{#if post.categories.indexOf(category) !== post.categories.length - 1},&nbsp; {/if}
          {/each}
        </td>
        <td>{new Date(post.createdAt).toLocaleDateString()}</td>
        <td class={`status ${post.status}`}>{post.status}</td>
        <td class="buttons">
          <Button type="edit" label="Edit Post"/>
          <Button type="view" label="View Post"/>
        </td>
      </tr>
    {/each}
  </tbody>
</table>


<style class="scss">
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;  /* This will ensure cells are closely packed */
    overflow: hidden;
  }

  thead {
    background-color: #F3F6F9;
    overflow: hidden;
  }

  th {
      text-align: left;
      padding: var(--space-s) 1.5rem;
      font-size: var(--text-14);
      font-weight: 600;
      line-height: 2;
      
      &:not(:first-child) {
        color: var(--color-base-300);
      }

      &:first-child {
        border-top-left-radius: var(--border-radius-xs);
        border-bottom-left-radius: var(--border-radius-xs);
      }


      &:last-child {
        border-top-right-radius: var(--border-radius-xs);
        border-bottom-right-radius: var(--border-radius-xs);
      }

  }

  td {
    font-size: 0.8125rem;
    padding: var(--space-m) 1.5rem;
    line-height: 2;
    border-bottom: 1px solid var(--color-base-100);

    &:not(:first-child) {
      color: var(--color-base-300);
    }

    &:first-child {
      font-size: var(--text-xxs);
      font-weight: 600;
      max-width: 30ch;
    }

    &.status {
      font-weight: 500;
    }

    &.category {
      max-width: 32ch;
    }

    &.draft {
      color: #FCC730;
    }

    &.private {
      color: #195897;
    }

    &.published {
      color: var(--color-system-green);
    }

    &.buttons {
      display: grid;
      gap: 0.5rem;
      align-items: center;
    }

    
  }

  button.filter {
    display: flex;
    align-items: center;
    background-color: unset;
    border: none;
    gap: 0.5rem;
    color: var(--color-base-300);
  }

</style>