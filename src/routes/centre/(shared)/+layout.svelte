<script>
    import { page } from '$app/stores';
    import Main from '../../../components/Main.svelte';
    import Section from '../../../components/Section.svelte';
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
            {#if data.centre.nested_subpage[0]}
                <Sidebar title="Още">
                    {#each data.centre.nested_subpage as nested_subpage}
                        <li>
                            <a
                                class:active={currentPage === nested_subpage.slug}
                                href="/centre/{nested_subpage.id}">{nested_subpage.title}</a
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
