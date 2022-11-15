<script>
    export let id;
    export let title;
    export let description;
</script>

<div class="wrapper">
    <h1><a href="projects/{id}">{title}</a></h1>
    <p>
        {description}
    </p>
</div>

<style lang="scss">
    div.wrapper {
        box-shadow: 10px 11px 20px 5px rgba(97, 97, 97, 0.15);

        padding-block: 1rem;
        padding-inline: 2rem;
    }
</style>
