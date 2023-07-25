<script lang="ts">
  import Button from "$components/Button.svelte";
import SectionHead from "../Section_head.svelte";
import { page } from '$app/stores';
  import ArticleCard from "./Article_card.svelte";

</script>


<section>
    <div class="grid">
        <div class="col-5 col-3-m col-3-s">
            <SectionHead heading="Keep Your House Clean" headingAccent="Cleaning Blog" alignment="left"/>
        </div>
        <div class="col-4 col-1-m col-spacer hide-m"></div>
        <div class="col-3 col-3-m right">
            <Button buttonClass="btn-ghost" buttonText="View All Posts" ariaLabel="View All Posts"/>
        </div>
        <ul class="col-12 col-6-m col-3-s grid">
            {#if $page.data.posts}
                {#each $page.data.posts as post}
                    <li class="col-4 col-3-m">
                        <ArticleCard title={post.title} desc={post.content} date={post.createdAt} />
                    </li>
                {/each}
            {/if}
        </ul>
    </div>

</section>

<style lang="scss">
    .grid {
        row-gap: var(--space-xxxl);
    }

    .right {
        display: flex;
        justify-content: end;
        align-self: start;
    }

    @media (width < 40rem ) {
        .right {
            justify-content: start;
        }
    }
</style>