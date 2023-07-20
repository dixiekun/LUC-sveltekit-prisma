<script lang="ts">
    import guaranteeBadge from "$lib/icons/icon_guarantee-badge.svg";
    import guaranteeBadgeDm from "$lib/icons/icon_guarantee-badge-dm.svg";

    export let message: string;

    export let isDarkMode: boolean = false;

</script>

{#if isDarkMode}
    <div class="head-dm">
        <img src="{guaranteeBadgeDm}" alt="Guarantee badge icon">
        <p><strong>100% Satisfaction Guaranteed:</strong> {message} </p>
    </div>
{:else}
    <div class="head">
        <img src="{guaranteeBadge}" alt="Guarantee badge icon">
        <p><strong>100% Satisfaction Guaranteed:</strong> {message} </p>
    </div>
{/if}


<style lang="scss">

    
    .head {
        display: flex;
        gap: var(--space-m);
        align-items: center;
        padding-block: var(--space-l);

        p {
            text-wrap: balance;
        }
    }

    .head-dm {
        display: flex;
        gap: var(--space-m);
        align-items: center;
        padding-block: var(--space-l);
        background-color: var(--color-primary);
        padding: var(--space-xl) var(--space-m);
        border-radius: var(--border-radius);

        p {
            text-wrap: balance;
            font-size: var(--text-xs);
            color: var(--color-primary-light-100);
        }
    }



    @media (width < 40rem) {
        p {
            font-size: var(--text-xs);
        }

        .head-dm {
            flex-direction: column;
            align-items: start;
        }
    }
</style>