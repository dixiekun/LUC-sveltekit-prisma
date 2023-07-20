<script lang="ts">
    import Button from '$components/Button.svelte';
    import Logo from '$components/logo.svelte';
    import { onMount } from 'svelte';

    let isMobile = false;
    let isTablet = false;
    let isClicked = false;

    function checkIfMobile() {
        isMobile = window.innerWidth <= 640; // Adjust the threshold as needed
    }

    function checkIfTablet() {
        isTablet = window.innerWidth <= 1120; // Adjust the threshold as needed
    }

    function toggleMenu() {
        isClicked = !isClicked;

        if (isClicked) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }



    onMount(() => {
        // Check the browser size on initial mount
        checkIfMobile();
        checkIfTablet();

        // Listen for window resize events
        window.addEventListener('resize', checkIfMobile);
        window.addEventListener('resize', checkIfTablet);
        
    });





</script>

<header>
    <nav class="main-navigation">
        <div class="grid">
            <div class="logo col-2 col-1-s">
                <Logo/>
            </div>
            <div class="col-1 col-spacer hide-m">
            </div>
            {#if isMobile}
                <div class="col-2 mobile-menu-wrapper" aria-expanded={isClicked ? 'true' : 'false'}>
                    <button class="mobile-menu-toggle" on:click={toggleMenu} aria-label="Mobile menu toggle button" aria-expanded={isClicked ? 'true' : 'false'}>
                        <span class="top-bar"></span>
                        <span class="center-bar"></span>
                        <span class="bottom-bar"></span>
                    </button>
                    {#if isClicked}

                        <ul class="mobile-menu">
                            <li>
                            <a href="/" aria-label="Home">Home</a>
                            </li>
                            <li>
                            <a href="/" aria-label="About">About</a>
                            </li>
                            <li>
                            <a href="/" aria-label="Services">Services</a>
                            </li>
                            <li>
                            <a href="/" aria-label="Blog">Blog</a>
                            </li>
                            <li>
                            <a href="/" aria-label="Contact">Contact</a>
                            </li>
                            <li>
                                <Button/>
                            </li>
                        </ul>


                    {/if}
                </div>
            {:else}
                <ul class="col-9 col-4-m">
                    <li class="{isTablet ? 'hide': ''}">
                        <a href="/" aria-label="Home">Home</a>
                    </li>
                    <li>
                        <a href="/" aria-label="About">About</a>
                    </li>
                    <li>
                        <a href="/" aria-label="Services">Services</a>
                    </li>
                    <li class="{isTablet ? 'hide': ''}">
                        <a href="/" aria-label="Blog">Blog</a>
                    </li>
                    <li class="{isTablet ? 'hide': ''}">
                        <a href="/" aria-label="Contact">Contact</a>
                    </li>
                    <li class="{isTablet ? 'hide': ''}">
                        <button class="btn-search" aria-label="Search">
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.5288 16C29.5288 23.4558 23.4847 29.5 16.0288 29.5C8.57296 29.5 2.52881 23.4558 2.52881 16C2.52881 8.54416 8.57296 2.5 16.0288 2.5C23.4847 2.5 29.5288 8.54416 29.5288 16ZM25.5552 27.5871C22.9645 29.7195 19.6462 31 16.0288 31C7.74454 31 1.02881 24.2843 1.02881 16C1.02881 7.71573 7.74454 1 16.0288 1C24.3131 1 31.0288 7.71573 31.0288 16C31.0288 20.1267 29.3624 23.8642 26.6657 26.5762L29.5591 29.4697C29.852 29.7626 29.852 30.2374 29.5591 30.5303C29.2662 30.8232 28.7914 30.8232 28.4985 30.5303L25.5552 27.5871Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <Button/>
                    </li>
                </ul>
            {/if}

        </div>
    </nav>
</header>

<style lang="scss">

    nav {
        padding-inline: var(--space-l);

        padding-block: var(--space-xs);
        .grid {
            min-height: inherit;
            align-items: center;
        }
    }

    .col-9 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li {

        a {
            font-size: var(--text-xs);
            white-space: nowrap;
            font-weight: 400;
            color: var(--color-base);

            &:hover {
                color: var(--color-accent);
            }
        }
    }

    .btn-search {
        background: unset;
        border: unset;
        cursor: pointer;

        &:hover {
            color: var(--color-accent);
        }
    }

    
    // Mobile Menu
    .mobile-menu-wrapper {
        display: grid;

        &[aria-expanded="true"] {
            position: absolute;
            z-index: 999;
            width: 100%;
            height: 100%;
            inset: 0;
            background-color: var(--color-primary-light-100);
            display: grid;
            place-content: center;

            .mobile-menu {
                display: grid;
                gap: var(--space-l);
                place-content: center;

                li {
                    a {
                        font-size: var(--text-xl);
                        line-height: 1.25;
                    }
                }
            }

            .mobile-menu-toggle {
                position: absolute;
                top: var(--space-xs);
                right: var(--space-l);
                overflow: hidden;
                width: 2rem;
                height: 2rem;

                span {
                    &.top-bar {
                        width: 100%;
                        transform: translateY(16px) rotate(-45deg);
                    }

                    &.bottom-bar {
                        width: 100%;
                        transform: translateY(-11px) rotate(45deg);
                    }

                    &.center-bar {
                        transform: translateX(100%);
                    }
                }
            }
        }
    }
    
    .mobile-menu-toggle {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 3.5rem;
        height: 3.5rem;
        cursor: pointer;
        position: relative;
        z-index: 100;
        background: unset;
        justify-content: center;
        align-items: end;
        border: unset;
        justify-self: end;

        span {
            width: 100%;
            height: 6px;
            background-color: var(--color-base);
            transition: transform 0.3s ease-in-out;
            border-radius: 4px;

            &.top-bar, &.bottom-bar {
                width: 80%;
            }
        }
    }



</style>