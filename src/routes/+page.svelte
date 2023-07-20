<script lang="ts">
  import Footer from "$components/Footer/Footer.svelte";
  import HomeHero from "$components/Sections/Hero/Home_hero.svelte";
  import Services from "$components/Sections/Services/Services.svelte";
  import TestimonialSection from "$components/Sections/Testimonials/Testimonial_section.svelte";
  import WhyChooseUs from "$components/Sections/Why_choose_us/Why_choose_us.svelte";

  const heroChecklist = [
    "<strong>Excellent Service:</strong> Detail-oriented, consistent cleaning services, every single time.",
    "<strong>Safe & Fully Insured:</strong> Your family's health and well-being are important to us.",
    "<strong>Local Owned & Operated Family Business:</strong> We are a family business deeply rooted in the Greater Grand Rapids community."
  ]

    
</script>
<main id="main">
  <HomeHero headingAccent="Welcome to the world of Lucid Cleaning" heading="Experience the Dream Clean Service" checklist={heroChecklist}/>
  <TestimonialSection/>
  <WhyChooseUs/>
  <Services/>
</main>
<Footer/>

<style lang="scss">


</style>


