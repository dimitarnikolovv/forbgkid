<script>
    import { page } from '$app/stores';
    import Main from '/src/components/Main.svelte';
    import Section from '/src/components/Section.svelte';
    import Sidebar from '../../../components/Sidebar.svelte';

    $: currentPage = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1);
</script>

<Main>
    <Section>
        <div class="section-wrap">
            <div class="content">
                <slot />
            </div>
            <Sidebar title="Вижте още">
                <li>
                    <a class:active={currentPage === 'awards'} href="/projects/awards">Награди</a>
                </li>
                <li>
                    <a class:active={currentPage === 'privacy'} href="/projects/privacy"
                        >Политика за поверителност и личните данни</a
                    >
                </li>
                <li>
                    <a class:active={currentPage === 'calendar'} href="/projects/calendar"
                        >Календар</a
                    >
                </li>
            </Sidebar>
        </div>
    </Section>
</Main>

<style lang="scss">
    .section-wrap {
        display: flex;
        gap: 3rem;

        @media only screen and (max-width: 1080px) {
            flex-direction: column;
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 70%;

            @media only screen and (max-width: 1080px) {
                width: 100%;
            }
        }
    }
</style>
