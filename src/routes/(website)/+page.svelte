<script lang="ts">
  import Seo from "$components/SEO.svelte";
  import Cta from "$components/Sections/CTA/CTA.svelte";
  import HomeHero from "$components/Sections/Hero/Home_hero.svelte";
  import LatestPosts from "$components/Sections/Latest_posts/Latest_posts.svelte";
  import ServiceArea from "$components/Sections/Location/Service-area.svelte";
  import Services from "$components/Sections/Services/Services.svelte";
  import TestimonialSection from "$components/Sections/Testimonials/Testimonial_section.svelte";
  import WhyChooseUs from "$components/Sections/Why_choose_us/Why_choose_us.svelte";
  import OgImage from "$lib/images/luc-og-image.webp"

  const heroChecklist = [
    "<strong>Excellent Service:</strong> Detail-oriented, consistent cleaning services, every single time.",
    "<strong>Safe & Fully Insured:</strong> Your family's health and well-being are important to us.",
    "<strong>Local Owned & Operated Family Business:</strong> We are a family business deeply rooted in the Greater Grand Rapids community."
  ]

  let seoMeta = {
    pageTitle: "Lucid Clean: House Cleaning Services Grand Rapids 1-616-951-1315",
    pageDescription: "Giving You A Cleaner Home And MORE FREE TIME. Serving The Greater GRAND RAPIDS Area. Get a Great Clean With Pet and Kid SAFE Products.",
    image: OgImage
  }

    
</script>

<Seo {...seoMeta}/>


<HomeHero headingAccent="Welcome to the world of Lucid Cleaning" heading="Experience the Dream Clean Service" checklist={heroChecklist}/>
<TestimonialSection/>
<WhyChooseUs/>
<Services/>
<ServiceArea/>
<LatestPosts/>
<Cta/>




