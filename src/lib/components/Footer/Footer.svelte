<script lang="ts">
  import Facebook from "$components/Icons/Facebook.svelte";
  import Instagram from "$components/Icons/Instagram.svelte";
  import Twitter from "$components/Icons/Twitter.svelte";
import Logo from "$components/logo.svelte";
import {page} from "$app/stores"
  import { afterNavigate } from "$app/navigation";
  import { onMount } from "svelte";

    let isAdminPage = false;

    let currentYear:number;

    onMount(() => {
        // Get the current year
        const now = new Date();
        currentYear = now.getFullYear();
    });

    function checkIfAdmin() {
        if ($page.data.pathname.startsWith('/sa-admin')) {
            isAdminPage = true;
        } else {
            isAdminPage = false;
        }
    }
    
    afterNavigate(() => {
        checkIfAdmin()
    })
</script>


{#if !isAdminPage}
    <footer>
        <div class="grid">
            <div class="col-3 footer-logo">
                <Logo/>
                <p>Your trusted partner for spotless spaces and peace of mind.</p>
            </div>
            <div class="col-3">
                <h2>Company</h2>
                <ul class="footer-menu">
                    <li><a href="/about" aria-label="About Us">About Us</a></li>
                    <li><a href="/faqs" aria-label="FAQs">FAQs</a></li>
                    <li><a href="/reviews" aria-label="Reviews">Reviews</a></li>
                    <li><a href="/blog" aria-label="Blog">Blog</a></li>
                    <li><a href="/careers" aria-label="Career Opportunities">Career Opportunities</a></li>
                    <li><a href="/franchise" aria-label="Own a Franchise">Own a Franchise</a></li>
                </ul>
            </div>
            <div class="col-3">
                <h2>Services</h2>
                <ul class="service-menu">
                    <li><a href="/services/residential-cleaning" aria-label="Residential Cleaning">Residential Cleaning</a></li>
                    <li><a href="/services/deep-cleaning" aria-label="Deep Cleaning">Deep Cleaning</a></li>
                    <li><a href="/services/office-cleaning" aria-label="Office Cleaning">Office Cleaning</a></li>
                    <li><a href="/services/move-in-out-cleaning" aria-label="Move In / Out Cleaning">Move In / Out Cleaning</a></li>
                    <li><a href="/services/organization-cleaning" aria-label="Organization">Organization</a></li>
                    <li><a href="/services/laundry-service" aria-label="Laundry Service">Laundry Service</a></li>
                </ul>
            </div>
            <div class="col-3">
                <h2>Get connected</h2>
                <ul class="socials">
                    <li class="icon-holder">
                        <a aria-label="Follow our facebook page" href="/">
                            <Facebook/>
                        </a>
                    </li>
                    <li class="icon-holder">
                        <a aria-label="Follow our instagram page" href="/">
                            <Instagram/>
                        </a>
                    </li>
                    <li class="icon-holder">
                        <a aria-label="Follow our twitter page" href="/">
                            <Twitter/>
                        </a>
                    </li>
                </ul>
                <div class="contacts">
                    <p>contact@lucidclean.com</p>
                    <p><strong>Call us at 1-616-951-1315</strong></p>
                </div>
            </div>
        </div>
    </footer>
{:else}
    <footer class="admin-footer">
        <div class="grid">
            <div class="col-12 col-6-m col-3-s center">
                <span>© 2014-{currentYear} lucidclean.com</span>
            </div>
        </div>
    </footer>
{/if}



<style lang="scss">
    .grid {
        row-gap: var(--space-xxl);
    }

    .col-3 {
        display: grid;
        row-gap: var(--space-xl);
        padding-right: var(--space-l);
        align-items: start;
        grid-auto-rows: max-content;
    }
    h2 {
        font-size: var(--text-m);
    }

    ul {
        li {
            a {
                font-size: var(--text-xs);
                font-weight: 400;
                color: var(--color-base);

                &:hover {
                    color: var(--color-accent);
                }
            }
        }
    }

    .socials {
        display: flex;
        gap: var(--space-xs);

        .icon-holder {
            padding: var(--space-xs);

            a {
                color: var(--color-primary);

                &:hover {
                    color: var(--color-accent);
                }
            }
        }
    }

    .contacts {
        display: grid;
        row-gap: var(--space-base);
    }

    .center {
        display: grid;
        place-items: center;

        span {
            font-size: var(--text-xxs);
        }
    }

    .admin-footer {
        padding-block: var(--space-base);
    }

</style>