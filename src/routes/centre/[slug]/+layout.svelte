<script>
    import { page } from '$app/stores';
    import Main from '../../../components/Main.svelte';
    import Section from '../../../components/Section.svelte';
    import Sidebar from '../../../components/Sidebar.svelte';

    export let data;

    $: currentPage = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1);

    let nested_subpage;
    $: data.centre.nested_subpage.forEach((sp) => {
        if (sp.id == $page.params.slug) nested_subpage = sp;
    });
</script>

<Main>
    <Section>
        <div class="section-wrap">
            <div class="content">
                <slot />
            </div>
            {#if nested_subpage.subpage[0]}
                <Sidebar title="Още">
                    {#each nested_subpage.subpage.slice(0, 10) as subpage}
                        <li>
                            <a
                                class:active={currentPage === subpage.slug}
                                href="/centre/{nested_subpage.id}/{subpage.slug}">{subpage.title}</a
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
