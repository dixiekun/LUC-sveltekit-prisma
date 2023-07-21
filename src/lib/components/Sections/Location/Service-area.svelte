<script lang="ts">
  import Button from "$components/Button.svelte";
import SectionHead from "../Section_head.svelte";
  import Map from "./Map.svelte";

</script>
<section>
    <div class="grid">
        <div class="col-4 left">
            <SectionHead heading="Our Service Area" headingAccent="Location" alignment="left" />
            <div class="content">
                <h3>Have a Question?<br> Call us 1-616-951-1315</h3>
                <ul class="schedule">
                    <li>
                        <span>Mon</span>
                        <span>8:00 am - 4:30 pm</span>
                    </li>
                    <li>
                        <span>Tue</span>
                        <span>8:00 am - 4:30 pm</span>
                    </li>
                    <li>
                        <span>Wed</span>
                        <span>8:00 am - 4:30 pm</span>
                    </li>
                    <li>
                        <span>Thu</span>
                        <span>8:00 am - 4:30 pm</span>
                    </li>
                    <li>
                        <span>Fri</span>
                        <span>8:00 am - 4:30 pm</span>
                    </li>
                    <li>
                        <span>Sat</span>
                        <span>8:00 am - 4:30 pm</span>
                    </li>
                    <li>
                        <span>Sun</span>
                        <span>8:00 am - 4:30 pm</span>
                    </li>
                </ul>
                <Button/>
            </div>
        </div>
        <div class="col-1 col-spacer hide-s"></div>
        <div class="col-7 col-6-m col-3-s">
           <Map longitude={-85.62} latitude={42.87}/>
        </div>
    </div>
</section>

<style lang="scss">
    .left {
        display: grid;
        row-gap: var(--space-xxl);
    }

    .content {
        display: grid;
        row-gap: var(--space-xl);

        h3 {
            color: var(--color-primary);
            line-height: 1.5;
        }

        ul {
            display: grid;
            row-gap: var(--space-m);

            li {
                font-size: var(--text-xs);
            }
        }
    }

</style>