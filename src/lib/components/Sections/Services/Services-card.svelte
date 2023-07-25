<script lang="ts">
  import { preloadData } from "$app/navigation";
  import UpArrowDiagonal from "$components/Icons/Up-arrow-diagonal.svelte";

    
    export let heading:string;
    export let desc:string;
    export let serviceImage: string;
    export let serviceUrl: string;

    function navigateToService(url:string) {
            window.location.href = url;
    }

    function handleKeyDown(event:KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
        // Handle 'Enter' key or 'Space' key press to trigger the same action as click
        navigateToService(serviceUrl);
        }
    }

    // function handleHover() {
    //     preloadData(`/services${serviceUrl}`)
    // }

</script>


<div class="service-card" 
    role="button"
    tabindex="-1"
    on:click={() => navigateToService(`/services${serviceUrl}`)} 
    on:keydown={handleKeyDown}
   >

    <a data-sveltekit-preload-data="hover" aria-label="Go to {heading} page" href="/services{serviceUrl}"><h3>{heading}</h3></a>
    <p class="desc">{desc}</p>
    <img src="{serviceImage}" alt="{heading}">
    <button aria-label="Learn more about {heading}" tabindex="-1">
        <UpArrowDiagonal/>
    </button>
</div>



<style lang="scss">
    .service-card {
        height: 16.5rem;
        overflow: hidden;
        border-radius: var(--border-radius);
        position:relative;
        display: grid;
        align-content: end;
        padding: var(--space-m);
        cursor: pointer;

        &:has(a:focus) {
            outline: 5px auto var(--color-system-blue);
            outline-offset: 0.4rem;
        }

        h3 {
            font-family: var(--system-ui);
            position: relative;
            z-index: 3;
            color: white;
            font-size: var(--text-base);
            transition: translate 0.2s ease;
        }


        p.desc {
            position: absolute;
            z-index: 2;
            font-size: var(--text-xxs);
            color: var(--color-primary-light-100);
            padding: var(--space-m);
            translate: 0 20rem;
            transition: translate 0.5s ease;

        }

        img {
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
            inset: 0;
            z-index: 1;
            transition: scale 0.3s ease;
        }

        &::before {
            content: '';
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.00) 100%);
            position: absolute;
            width: 100%;
            height: 100%;
            inset: 0;
            z-index: 2;
            transition: background 0.3s ease;
        }

        button {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            z-index: 2;
            color: var(--color-action);
            border-radius: 100%;
            padding: var(--space-base);
            border: unset;
            background-color: white;
            cursor: pointer;
        }

        &:hover {
            button {
                color: white;
                background-color: var(--color-action);
            }

            img {
                scale: 1.1;
            }

            h3 {
                translate: 0 -5.2rem;
            }

            p {
                translate: 0 9rem;
            }

            &::before {
                background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.00) 100%);
            }
        }
    }

</style>