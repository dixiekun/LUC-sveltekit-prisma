<script lang="ts">
    export let data

    const { serviceData } = data;

</script>

<section>
    <div class="grid">
        <div class="col-6 col-3-s">
            <h1>{serviceData.heading}</h1>
            <p>{serviceData.desc}</p>
        </div>
        <div class="col-6 col-3-s">
            <img src="{serviceData.serviceImage}" alt="{serviceData.heading}">
        </div>
    </div>
    
</section>