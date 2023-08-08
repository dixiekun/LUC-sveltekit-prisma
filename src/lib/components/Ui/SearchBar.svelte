<script lang="ts">
  import IconSearch from "$components/Icons/icon_search.svelte";
  import { createEventDispatcher } from "svelte";

  export let posts: any[]
  let searchTerm: string =""

  const dispatch = createEventDispatcher()


  function handleSearch(e: Event) {
    e.preventDefault()
    const searchResults = posts.filter((post)=> 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())   
    )

    dispatch("search-results", searchResults)
  }

  function handleInput(e: Event) {
    const inputElement = e.target as HTMLInputElement
    searchTerm = inputElement.value;
    if (searchTerm.trim() === "") {
      // If the search term is empty, emit all posts
      dispatch("search-results", posts);
    }
  }

</script>
<form on:submit={handleSearch}>
    <input on:input={handleInput} bind:value={searchTerm} aria-label="Search posts" type="text" name="q" placeholder="Search posts...">
    <button type="submit">
        <IconSearch/>
    </button>
</form>

<style lang="scss">
    form {
        display: flex;
        border-radius: 0.375rem;
        border: 1px solid var(--color-base-400, #403C43);
        overflow: hidden;

        &:has(input:focus) {
            outline: 2px solid var(--color-system-blue);
            border: 1px solid rgb(255 255 255 / 0%);
        }

        input {
            flex: 1;
            padding-inline: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px 0 0 4px;
            font-size: var(--text-14);

            &::placeholder {
                color: var(--color-base-200);
            }

            &:focus {
                outline: none;
            }
        }

        button {
            padding: 0.625rem 1.5rem;
            background-color: var(--color-base-100);
            color: var(--color-base-400);
            border: none;
            border-radius: 0 4px 4px 0;
            cursor: pointer; 

            &:hover {
                background-color: var(--color-system-blue);
                color: white;
            }
        }
    }

</style>