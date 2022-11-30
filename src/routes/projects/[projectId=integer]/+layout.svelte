<script>
    import { page } from '$app/stores';
    import Main from '/src/components/Main.svelte';
    import Section from '/src/components/Section.svelte';
    import Sidebar from '../../../components/Sidebar.svelte';

    export let data;

    $: currentPage = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1);
</script>

<Main>
    <Section>
        <slot />
    </Section>
    {#if data.project.attributes.sub_pages.data}
        <Sidebar title="Още към проекта">
            {#each data.project.attributes.sub_pages.data as subpage}
                <li>
                    <a
                        class:active={currentPage === subpage.attributes.slug}
                        href="/projects/{data.project.id}/{subpage.attributes.slug}"
                        >{subpage.attributes.title}</a
                    >
                </li>
            {/each}
        </Sidebar>
    {/if}
</Main>
