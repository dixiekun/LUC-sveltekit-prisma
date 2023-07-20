<script lang="ts">
import Button from "$components/Button.svelte";
import SectionHead from "$components/Sections/Section_head.svelte";
import sectionImage from "$lib/images/why-choose-us.jpg"
import FeatureCard from "../Feature_card.svelte";
import iconStaff from "$lib/icons/icon_staff.svg"
import iconSafe from "$lib/icons/icon_safe-products.svg"
import iconInsured from "$lib/icons/icon_insured.svg"
import iconLocal from "$lib/icons/icon_local-business.svg"


let features = [
    {
        heading: 'Experienced Staff',
        desc: "We believe in delivering the highest level of service. Your satisfaction is our top priority, and we guarantee that you'll be delighted with our cleaning results.",
        feature_icon: iconStaff
    }, 
    {
        heading: 'Safe & Professional',
        desc: "Our housekeepers use safe, non-toxic products to ensure a healthy environment for you and your loved ones. Trust us to clean your home with the utmost professionalism and care.",
        feature_icon: iconSafe
    }, 
    {
        heading: 'Fully Insured',
        desc: "Rest easy knowing that Lucid Cleaning is fully insured. We prioritize your peace of mind and take every precaution to protect your property during our cleaning services.",
        feature_icon: iconInsured
    }, 
    {
        heading: 'Local Owned & Operated',
        desc: "We are a family business deeply rooted in the Greater Grand Rapids community. When you choose Lucid Cleaning, you're supporting a local enterprise dedicated to serving our neighbors with exceptional cleaning services.",
        feature_icon: iconLocal
    }, 
]

</script>
<section>
    <div class="grid">
        <div class="col-5 col-5-m col-3-s left">
            <SectionHead headingAccent="Satisfaction Guaranteed" heading="Why Choose Us?" alignment="left"/>
            <div class="body">            
                <img src="{sectionImage}" alt="Lucid cleaning"/>
                <p>At Lucid Cleaning, we are dedicated to providing you with exceptional cleaning services that exceed your expectations. Our commitment to your satisfaction, along with our use of safe and non-toxic products, ensures a clean and healthy environment for you and your loved ones.</p>
                <Button/>
            </div>
        </div>
        <div class="col-1 spacer hide-s"></div>
        <div class="col-6 col-6-m col-3-s right">
            <ul class="features">
                {#each features as feature}
                    <li><FeatureCard {...feature} /></li>
                {/each}
            </ul>

            
        </div>
    </div>
</section>

<style lang="scss">
    .grid {
        row-gap: var(--space-xxl);
    }

    .left {
        display: grid;
        row-gap: var(--space-xxl);
        grid-auto-rows: min-content;

        .body {
            display: grid;
            gap: var(--space-xl);
        }
    }

    .features {
        display: grid;
        gap: var(--space-xl);
    }

</style>