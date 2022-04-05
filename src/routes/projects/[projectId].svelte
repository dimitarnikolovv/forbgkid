<script>
    import projects from './projects.json';
    import { page } from '$app/stores';

    const path = $page.url.pathname;
    const id = path.substring(path.lastIndexOf('/') + 1);
</script>

<svelte:head>
    <title />
</svelte:head>
