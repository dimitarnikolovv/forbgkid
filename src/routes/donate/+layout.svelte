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
            <a href="/donate/darete-sega">Дарете сега</a>
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
            width: 6rem;
            height: 6rem;
            background-image: url('./images/donate_now.png');
            background-size: contain;
            font-size: 0;
        }
    }
</style>
