<script lang="ts">
  import TestimonialCard from "./Testimonial_card.svelte";
  import michael from "$lib/images/avatars/michael.png";
  import sarah from "$lib/images/avatars/sarah.png";
  import emily from "$lib/images/avatars/emily.png";
  import david from "$lib/images/avatars/david.png"
  import SectionHead from "$components/Sections/Section_head.svelte";

  interface Testimonial {
    message: string;
    customerName: string;
    customerAvatar: string;
  }

  const testimonials: Testimonial[] = [
        {
        message: "I can't recommend Lucid Cleaning enough! As a busy professional, I needed a reliable and trustworthy cleaning service for my office. Lucid Cleaning not only met but exceeded my expectations. Their team is professional, friendly, and incredibly thorough. It's such a relief to walk into a clean and organized workspace every day. Thank you, Lucid Cleaning, for making my office a place I can be proud of!",
        customerName: "Michael P.",
        customerAvatar: michael
    },
    {
        message: "I couldn't be happier with Lucid Cleaning! They have truly transformed my home cleaning experience. Their attention to detail and commitment to using safe products made me feel confident in their services. Now, I have more time to spend with my family and enjoy a spotless home. Thank you, Lucid Cleaning, for giving me a cleaner home and more free time",
        customerName: "Sarah M.",
        customerAvatar: sarah
    },
    {
        message: "Lucid Cleaning is a dream come true! I recently used their carpet cleaning service, and the results were astounding. My carpets looked brand new, and the stains that I thought were impossible to remove were completely gone. The team was prompt, courteous, and ensured that I was satisfied with the results. If you're looking for a cleaning service that goes above and beyond, look no further than Lucid Cleaning!",
        customerName: "Emily T.",
        customerAvatar: emily
    },
    {
        message: "I am so grateful to Lucid Cleaning for their exceptional residential housekeeping services. As a working parent, finding time to clean my home was always a struggle. But ever since I started using Lucid Cleaning, it feels like a weight has been lifted off my shoulders. Their team is friendly, reliable, and does an amazing job every time. Coming home to a clean and organized house is such a relief. Thank you, Lucid Cleaning, for giving me back my weekends and a beautifully clean home!",
        customerName: "David H.",
        customerAvatar: david
    }
  ]


</script>
<section>
    <div class="container">
        <SectionHead heading="Trusted by all our customers" headingAccent="Testimonials" alignment="center" />
    </div>
    <ul class="grid">
        {#each testimonials as testimonial}
            <li class="col-6 col-3-s"><TestimonialCard
                message={testimonial.message}
                customerName={testimonial.customerName}
                customerAvatar={testimonial.customerAvatar}
            /></li>
        {/each}
    </ul>

</section>

<style lang="scss">
    .grid {
        margin-top: var(--space-xxl);
        // grid-template-columns: repeat(auto-fit, minmax(min(32rem, 100%), 1fr));
        max-width: 81rem;
        gap: var(--space-xxl);

    }

</style>