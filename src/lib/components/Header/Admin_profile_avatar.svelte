<script lang="ts">
    import avatar from '$lib/images/avatars/dummy_avatar.jpg'
</script>
<div class="wrapper">
    <img src="{avatar}" alt="Dummy Avatar">
    <div class="name">
        <p>Joyce Pastor</p>
        <span>Editor</span>
    </div>
</div>

<style lang="scss">
    .wrapper {
        display: flex;
        gap: var(--space-s);
        align-items: center;

        img {
            height: 4rem;
            width: 4rem;
            border-radius: 4rem;
            border: 2px solid var(--color-admin-orange)
        }

        .name {
            color: hsla(0, 0%, 100%, 0.9);
            display: grid;
            
            p {
                font-size: var(--text-xs);
            }
            span {
                font-size: var(--text-14);
                color: var(--color-base-300);
            }
 
        }
    }
</style>