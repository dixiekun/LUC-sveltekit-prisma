<script lang="ts">
  import Button from "$components/Button.svelte";
  import Video from "$components/Video.svelte";
  import checkIcon from "$lib/icons/icon_checkmark.svg";
  import introVideoThumbnail from "$lib/images/intro-video-thumbnail.webp";
  import videoSrc from "$lib/videos/intro-video.mp4"
  import SatistactionGuaranted from "../Satistaction_guaranted.svelte";

  export let headingAccent:string;
  export let heading:string;
  export let checklist:string[];

</script>


<section>
    <div class="grid">
        <div class="col-5 col-6-m col-3-s left">
            <div class="head">
                <span class="heading-accent">{headingAccent}</span>
                <h1>{heading}</h1>
            </div>
            <ul>
                {#each checklist as item}
                     <li><img src="{checkIcon}" alt=""><p>{@html item}</p></li>
                {/each}
            </ul>
            <Button/>
        </div>
        <div class="col-1 col-spacer hide-m">
        </div>
        <div class="col-6 col-3-s right">
            <SatistactionGuaranted message="We believe in delivering the highest level of service. Experience the joy of a meticulously clean home."/>
            <div class="media">
                <Video {videoSrc} thumbnail={introVideoThumbnail}/>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        position: relative;
        background-color: var(--color-base-100);

        &::before {
            content: '';
            background: url("$lib/images/bg-top-wave.svg") no-repeat;
            position: absolute;
            height: min(16.156rem, 30dvw);
            width: 100%;
            top: 0;
            left: 0;
            background-position: top center;
            background-size: cover;
            z-index: 1;
        }

        &::after {
            content: '';
            background: url("$lib/images/bg-bottom-wave.svg") no-repeat;
            position: absolute;
            height: min(15.424rem, 30dvw);
            width: 100%;
            bottom: 0;
            left: 0;
            background-position: bottom center;
            background-size: cover;
            z-index: 1;
        }
    }

    .grid {
        row-gap: var(--space-xxxl);
        z-index: 2;
        position: relative;
    }

    h1 {
        font-size: var(--text-xxl);
    }

    .heading-accent {
        font-size: var(--text-s);
        color: var(--color-primary);
    }

    .left {
        display: grid;
        gap: var(--space-xxl);
    }

    .right {
        display: grid;
        align-items: center;
        gap: var(--space-xxl);
        grid-auto-rows: max-content;
        

        .media {
            align-self: flex-start;
        }
    }

    ul {
        display: grid;
        gap: var(--space-l);

        li {
            display: flex;
            align-items: center;
            gap: var(--space-m);
        }
    }
</style>