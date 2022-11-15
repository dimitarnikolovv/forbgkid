<script>
    import { fly } from 'svelte/transition';
    export let data;
</script>

<svelte:head>
    <title>Проекти</title>
</svelte:head>

<div in:fly={{ x: 100, duration: 200, delay: 300 }} out:fly={{ x: -400, duration: 200 }}>
    <h1>Проекти</h1>
    {#each data.projects as project}
        <h1><a href="projects/{project.id}">{project.attributes.title}</a></h1>
        <p>
            {project.attributes.description}
        </p>
    {/each}
</div>
