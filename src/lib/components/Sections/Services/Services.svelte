<script lang="ts">
  import SatistactionGuaranted from "../Satistaction_guaranted.svelte";
    import SectionHead from "../Section_head.svelte";
  import ServicesCard from "./Services-card.svelte";
  import { page } from '$app/stores';

</script>

<section>
    <div class="grid">
        <div class="col-5 col-6-m col-3-s">
            <SectionHead headingAccent="Services" heading="Best Cleaning Services" alignment="left" />
        </div>
        <div class="col-1 col-spacer hide-s"></div>
        <div class="col-6 col-3-s">
            <SatistactionGuaranted 
                isDarkMode={true}
                message="If there's ever a moment when you're not absolutely thrilled with any area we've cleaned, please let us know within 24 hours of the clean. We'll jump into action right away and come back the next day with a smile to address any concerns you might have. "
            />
        </div>
        <div class="col-1 col-spacer hide-s"></div>
        <div class="col-10 col-6-m col-3-s">
            <ul class="service-list">
                {#if $page.data.services}
                    {#each $page.data.services as service}
                        <li>
                            <ServicesCard {...service} />
                        </li>
                    {/each}
                {/if}

            </ul>
        </div>
        <div class="col-1 col-spacer hide-s"></div>
    </div>
</section>


<style lang="scss">
    .service-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
        gap: var(--space-xxl);
        margin-top: var(--space-xxl);
    }

</style>