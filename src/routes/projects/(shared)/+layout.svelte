<script>
    import { page } from '$app/stores';
    import Main from '$lib/components/Main.svelte';
    import Section from '$lib/components/Section.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';

    $: currentPage = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1);
</script>

<Main>
    <Section>
        <slot />
    </Section>

    <Sidebar title="Вижте още">
        <li>
            <a class:active={currentPage === 'calendar'} href="/projects/calendar">Календар</a>
        </li>
        <li>
            <a class:active={currentPage === 'awards'} href="/projects/awards">Награди</a>
        </li>
        <li>
            <a class:active={currentPage === 'privacy'} href="/projects/privacy"
                >Политика за поверителност и личните данни</a
            >
        </li>
    </Sidebar>
</Main>
