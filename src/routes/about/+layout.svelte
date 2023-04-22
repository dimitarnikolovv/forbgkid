<script>
    import { page } from '$app/stores';
    import Main from '$lib/components/Main.svelte';
    import Section from '$lib/components/Section.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';

    $: currentPage = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1);
    export let data;
</script>

<Main>
    <Section>
        <slot />
    </Section>
    <Sidebar title="Още">
        <li>
            <a class:active={currentPage === 'about'} href="/about">Как помагаме</a>
        </li>
        {#each data.about.sub_pages.data as subpage}
            <li>
                <a
                    class:active={currentPage === subpage.attributes.slug}
                    href="/about/{subpage.attributes.slug}">{subpage.attributes.title}</a
                >
            </li>
        {/each}
    </Sidebar>
</Main>
