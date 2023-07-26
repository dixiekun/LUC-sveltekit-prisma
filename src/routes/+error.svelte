<script>
    import { page } from '$app/stores';
</script>

<main>
    <section>
        <div class="grid">
            <div class="col-12 col-6-m col-3-s center">
                <h1>{$page.status}</h1>
                <p>Opps! Page does not exist or page not built yet. Comeback later. <a href="/">Back to home page</a></p>
            </div>
        </div>
    </section>
</main>


