<script>
    import { page } from '$app/stores';
    import Main from '/src/components/Main.svelte';
    import Section from '/src/components/Section.svelte';
    import Sidebar from '../../components/Sidebar.svelte';

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
