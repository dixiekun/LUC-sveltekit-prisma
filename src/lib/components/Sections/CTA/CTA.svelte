<script lang="ts">
  import Button from "$components/Button.svelte";

  export let text:string = "It's time to put your cleaning on autopilot and reclaim your free time."

</script>


<section>
    <div class="grid">
        <div class="col-12 col-6-m col-3-s center">
            <h3>{text}</h3>
            <Button/>
        </div>
    </div>
</section>


<style lang="scss">
    .center {
        display: grid;
        place-items: center;
        gap: var(--space-xl);
        color: white;
        position: relative;
        z-index: 4;
    }

    h3 {
        width: min(30ch, 100%);
        text-align: center;
        line-height: 1.5;
    }

    .grid {
        background-color: var(--color-primary);
        border-radius: var(--border-radius);
        min-height: 44vh;
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            background: url('$lib/images/bg-stars.svg') no-repeat;
            height: 100%;
            width: 100%;
            position: absolute;
            left: 2%;
            top: 10%;

        }

        &::after {
            content: '';
            background: url('$lib/images/bg-bottom-wave.svg') no-repeat;
            height: 100%;
            width: 100%;
            background-position: bottom center;
            position: absolute;
            bottom: -1.5rem;
            opacity: 0.4;
            z-index: 1;
        }
    }

</style>