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
            <a class:active={currentPage === 'donate'} href="/donate">Дарителство</a>
        </li>
        {#each data.donate.sub_pages.data as subpage}
            <li>
                <a
                    class:active={currentPage === subpage.attributes.slug}
                    href="/donate/{subpage.attributes.slug}">{subpage.attributes.title}</a
                >
            </li>
        {/each}
    </Sidebar>

    {#if currentPage !== 'darete-sega'}
        <div class="donate">
            <a href="/donate/darete-sega"><div class="donate-now-icon" /></a>
        </div>
    {/if}
</Main>

<style lang="scss">
    div.donate {
        z-index: 30;
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        a {
            display: block;
        }
    }
</style>
