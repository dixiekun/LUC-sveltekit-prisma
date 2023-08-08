<script lang="ts">
  import IconPlus from "$components/Icons/icon_plus.svelte";

    export let label: string;
    export let type: 'new' | 'edit' | 'view' = 'new';

</script>

<button class={type}>
    {#if type === 'new'}
        <span>
            <IconPlus/>
        </span>
    {/if}
    {label}
</button>

<style lang="scss">
    button {
        padding: 0.5rem 1rem;
        border-radius: var(--border-radius-xs);
        height: 1.9375rem;
        display: grid;
        place-content: center;
        font-weight: 600;

        &.new {
           display: flex;
           align-items: center;
           border-radius: var(--border-radius-s);
           color: white;
           gap: 0.5rem;
           font-size: var(--text-xxs);
           background-color: var(--color-system-blue);
           border: none;
           padding: 0.625rem 1rem;
           height: 2.75rem;

           &:hover {
            background-color: var(--color-system-blue-hover);
           }
        }

        &.edit {
            border: none;
            color: var(--color-system-teal);
            background-color: var(--color-system-teal-100);
            max-width: 6.4rem;

            &:hover {
                outline: 1px solid var(--color-system-teal);
            }
        }

        &.view {
            border: none;
            color: var(--color-base-300);
            max-width: 6.4rem;

            &:hover {
                outline: 1px solid var(--color-base-200);
            }
        }



    }
</style>