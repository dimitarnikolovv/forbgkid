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
        <div class="section-wrap">
            <div class="content">
                <slot />
            </div>
            {#if data.project.attributes.subpage[0]}
                <Sidebar title="Още към проекта">
                    {#each data.project.attributes.subpage as subpage}
                        <li>
                            <a
                                class:active={currentPage === subpage.slug}
                                href="/projects/{data.project.id}/{subpage.slug}">{subpage.title}</a
                            >
                        </li>
                    {/each}
                </Sidebar>
            {/if}
        </div>
    </Section>
</Main>

<style lang="scss">
    .section-wrap {
        display: flex;
        justify-content: center;
        gap: 3rem;

        @media only screen and (max-width: 1080px) {
            flex-direction: column;
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            @media only screen and (max-width: 1080px) {
                width: 100%;
            }
        }
    }
</style>
