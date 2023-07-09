<script lang="ts">
    import '$lib/styles/global.scss';
</script>

<a href="#main" class="skip-to-main-content-link">Skip to main content</a>

<slot/>

<style>
    .skip-to-main-content-link {
        position: absolute;
        font-size: var(--text-s);
        left: -9999px;
        z-index: 999;
        padding: 1em;
        background-color: var(--color-system-blue);
        color: white;
        opacity: 0;
    }
    .skip-to-main-content-link:focus {
        left: 10%;
        transform: translateX(-50%);
        opacity: 1;
    }
</style>