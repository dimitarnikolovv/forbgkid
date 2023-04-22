<script>
    import { page } from '$app/stores';
    import Main from '$lib/components/Main.svelte';
    import Section from '$lib/components/Section.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';

    export let data;

    $: currentPage = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1);

    let subpage;
    $: data.centre.sub_pages.data.forEach((sp) => {
        if (sp.id == $page.params.slug) subpage = sp;
    });
</script>

<Main>
    <Section>
        <slot />
    </Section>

    {#if subpage.attributes.nested_pages.data[0]}
        <Sidebar title="Още">
            {#each subpage.attributes.nested_pages.data as nested_page}
                <li>
                    <a
                        class:active={currentPage === nested_page.attributes.slug}
                        href="/centre/{subpage.id}/{nested_page.attributes.slug}"
                        >{nested_page.attributes.title}</a
                    >
                </li>
            {/each}
        </Sidebar>
    {/if}
</Main>
