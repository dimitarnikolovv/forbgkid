<script>
    import { fly } from 'svelte/transition';
    import Project from '../../../components/Project.svelte';
    export let data;
</script>

<svelte:head>
    <title>Проекти</title>
</svelte:head>

<div in:fly={{ x: 100, duration: 200, delay: 300 }} out:fly={{ x: -400, duration: 200 }}>
    <div class="project-wrap">
        <h1>Проекти</h1>
        {#each data.projects as project}
            <Project
                id={project.id}
                title={project.attributes.title}
                description={project.attributes.description}
            />
        {/each}
    </div>
</div>

<style lang="scss">
    div.project-wrap {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>
