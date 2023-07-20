<script lang="ts">
  import SatistactionGuaranted from "../Satistaction_guaranted.svelte";
    import SectionHead from "../Section_head.svelte";
  import ServicesCard from "./Services-card.svelte";
  import ImageResidential from "$lib/images/services/residential.webp"
  import ImageDeepClean from "$lib/images/services/deep-cleaning.webp"
  import ImageMoveInOut from "$lib/images/services/move-in-out.webp"
  import ImageOffice from "$lib/images/services/office.webp"
  import ImageOrganization from "$lib/images/services/organization.webp"
  import ImageLaundry from "$lib/images/services/laundry.webp"

  const services = [
    {
        heading: "Residential Cleaning",
        desc: "Designed to make your home shine and create a clean, comfortable living environment for you and your family.",
        serviceImage: ImageResidential,
        serviceUrl: "/residential-cleaning"
    }, 
    {
        heading: "Deep Cleaning",
        desc: "When it's time to give your home a comprehensive and intensive clean.",
        serviceImage: ImageDeepClean,
        serviceUrl: "/deep-cleaning"
    },
    {
        heading: "Move In/Out Cleaning",
        desc: "Move In/Out Cleaning service is here to make your transition smoother.",
        serviceImage: ImageMoveInOut,
        serviceUrl: "/move-in-out-cleaning"
    },
    {
        heading: "Office Cleaning",
        desc: "A clean and organized office environment contributes to increased productivity and a positive work atmosphere.",
        serviceImage: ImageOffice,
        serviceUrl: "/office-cleaning"
    },
    {
        heading: "Organization",
        desc: "An organized home brings a sense of tranquility and allows you to make the most of your living space.",
        serviceImage: ImageOrganization,
        serviceUrl: "/organization-cleaning"
    },
    {
        heading: "Laundry Service",
        desc: "Say goodbye to the never-ending laundry pile with our convenient and reliable Laundry Service.",
        serviceImage: ImageLaundry,
        serviceUrl: "/laundry-service"
    }
  ]

</script>

<section>
    <div class="grid">
        <div class="col-5 col-6-m col-3-s">
            <SectionHead headingAccent="Services" heading="Best Cleaning Services" alignment="left" />
        </div>
        <div class="col-1 col-spacer hide-s"></div>
        <div class="col-6 col-3-s">
            <SatistactionGuaranted 
                isDarkMode={true}
                message="If there's ever a moment when you're not absolutely thrilled with any area we've cleaned, please let us know within 24 hours of the clean. We'll jump into action right away and come back the next day with a smile to address any concerns you might have. "
            />
        </div>
        <div class="col-1 col-spacer hide-s"></div>
        <div class="col-10 col-6-m col-3-s">
            <ul class="service-list">
                {#each services as service}
                    <li>
                        <ServicesCard {...service}
                        />
                    </li>
                {/each}
            </ul>
        </div>
        <div class="col-1 col-spacer hide-s"></div>
    </div>
</section>


<style lang="scss">
    .service-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
        gap: var(--space-xxl);
        margin-top: var(--space-xxl);
    }

</style>