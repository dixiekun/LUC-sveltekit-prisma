<script lang="ts">
    export let buttonText:string = "Get instant estimate";
    export let ariaLabel:string = "Instant estimate button";
    export let buttonClass:string = "btn-primary";
</script>

<button class={buttonClass} aria-label="{ariaLabel}">
    {buttonText}
</button>


<style lang="scss">

    .btn-primary {
            font-size: var(--text-s);
    }



    @media (width > 1299px) {
        .btn-primary {
            font-size: var(--text-base);
        }
    }
    
</style>