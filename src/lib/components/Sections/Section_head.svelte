<script lang="ts">

    export let heading: string;
    export let headingAccent: string;


    type Alignment = 
        | 'left'
        |'center'
    

    export let alignment: Alignment;

</script>



{#if alignment === 'center'}
    <div class="head center">
        <div class="heading-accent">{headingAccent}</div>
        <h2>{heading}</h2>
    </div>
{:else}
    <div class="head left">
        <div class="heading-accent">{headingAccent}</div>
        <h2>{heading}</h2>
    </div>
{/if}



<style lang="scss">
    .head {
        display: grid;
        gap: var(--space-m);
        width: min(100%, 41.438rem);
    }

    .center {
        place-items: center;
        text-align: center;
        margin-inline: auto;

        .heading-accent {
            display: flex;
            width: 100%;
            align-items: center;
            gap: var(--space-m);

            &::before {
                content: '';
                height: 1px;
                width: 100%;
                background-color: var(--color-primary-light-100);
            }

            &::after {
                content: '';
                height: 1px;
                width: 100%;
                background-color: var(--color-primary-light-100);
            }
        }

        h2 {
            position: relative;


            &::before {
                content: '';
                height: 3.029rem;
                width: 2.313rem;
                background: url('$lib/icons/icon_title_glitter.svg') no-repeat;
                position: absolute;
                top: -0.8rem;
                left: -2.5rem;
        }
    }


    }

    .left {
        justify-content: start;
        text-align: left;

        .heading-accent {
            display: flex;
            width: 100%;
            align-items: center;
            gap: var(--space-m);

            &::before {
                content: '';
                height: 1px;
                width: 25.37%;
                background-color: var(--color-primary-light-100);
            }

        }

        h2 {
            position: relative;

                &::after {
                    content: '';
                    display: inline-block;
                    height: 3.029rem;
                    width: 2.313rem;
                    background: url('$lib/icons/icon_title_glitter.svg') no-repeat;
                    position: relative;
                    top: 0;
                    right: -0.5rem;
                    transform: scaleX(-1);
            }
        }
    }


    .heading-accent {
        font-size: var(--text-xs);
        color: var(--color-primary);
    }


</style>