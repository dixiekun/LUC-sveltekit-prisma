<script lang="ts">


    export let heading:string;
    export let desc:string;
    export let feature_icon:string;

</script>

<div class="card_feature">
    <img src="{feature_icon}" alt="">
    <div class="text">
        <h3>{heading}</h3>
        <p>{desc}</p>
    </div>
</div>

<style>
    .card_feature {
        display: flex;
        padding: var(--space-xl) var(--space-m);
        align-items: center;
        gap: 24px;
        align-self: stretch;
        border-radius: 12px;
        background: #FFF;
        box-shadow: var(--box-shadow-2);
    }

    .text {
        display: grid;
        gap: var(--space-s);
    }

    h3 {
        color: var(--color-primary);
    }

    p {
        font-size: var(--text-xs);
    }

    @media (width < 40rem) {
        .card_feature {
            flex-direction: column;
            align-items: start;
        }
    }
</style>