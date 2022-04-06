<script>
    import projects from './projects.json';
    import { page } from '$app/stores';

    $: projectId = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1);

    $: project = projects.find(({ id }) => id === projectId);
</script>

<svelte:head>
    <title>{project.name}</title>
</svelte:head>

<h1>{project.name}</h1>

<style lang="scss">
    h1 {
        line-height: 1.2em;
    }
</style>
