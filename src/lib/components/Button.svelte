<script lang="ts">
    export let buttonText:string = "Get instant estimate";
    export let ariaLabel:string = "Instant estimate button";
    export let buttonClass:string = "btn-primary";
</script>

<button class={buttonClass} aria-label="{ariaLabel}">
    {buttonText}
</button>

