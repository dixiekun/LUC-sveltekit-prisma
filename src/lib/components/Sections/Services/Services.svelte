<script lang="ts">
  import SatistactionGuaranted from "../Satistaction_guaranted.svelte";
import SectionHead from "../Section_head.svelte";

</script>

<section>
    <div class="grid">
        <div class="col-5">
            <SectionHead headingAccent="Services" heading="Best Cleaning Services" alignment="left" />
        </div>
        <div class="col-1 col-spacer"></div>
        <div class="col-6">
            <SatistactionGuaranted 
                isDarkMode={true}
                message="If there's ever a moment when you're not absolutely thrilled with any area we've cleaned, please let us know within 24 hours of the clean. We'll jump into action right away and come back the next day with a smile to address any concerns you might have. "
            />
        </div>
        
    </div>
</section>