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
        <div class="section-wrap">
            <div class="content">
                <slot />
            </div>
            <Sidebar title="Още">
                <li>
                    <a class:active={currentPage === 'about'} href="/about">Как помагаме</a>
                </li>
                {#each data.about.subpage as subpage}
                    <li>
                        <a class:active={currentPage === subpage.slug} href="/about/{subpage.slug}"
                            >{subpage.title}</a
                        >
                    </li>
                {/each}
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
