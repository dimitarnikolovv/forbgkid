<script>
    import { page } from '$app/stores';
    import Main from '$lib/components/Main.svelte';
    import Section from '$lib/components/Section.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';

    export let data;

    $: currentPage = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1);
</script>

<Main>
    <Section>
        <slot />
    </Section>

    {#if data.centre.sub_pages.data}
        <Sidebar title="Още">
            {#each data.centre.sub_pages.data as subpage}
                <li>
                    <a
                        class:active={currentPage === subpage.attributes.slug}
                        href="/centre/{subpage.id}">{subpage.attributes.title}</a
                    >
                </li>
            {/each}
        </Sidebar>
    {/if}
</Main>
