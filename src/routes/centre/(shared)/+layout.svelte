<script>
    import { page } from '$app/stores';
    import Main from '../../../components/Main.svelte';
    import Section from '../../../components/Section.svelte';

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
                <aside>
                    <h1>Още</h1>
                    <nav>
                        <ul>
                            {#each data.centre.nested_subpage as nested_subpage}
                                <li>
                                    <a
                                        class:active={currentPage === nested_subpage.slug}
                                        href="/centre/{nested_subpage.id}">{nested_subpage.title}</a
                                    >
                                </li>
                            {/each}
                        </ul>
                    </nav>
                </aside>
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

        aside {
            position: sticky;
            top: 10rem;
            width: 30%;
            height: fit-content;
            background-color: wheat;
            padding-block: 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            @media only screen and (max-width: 1080px) {
                width: 100%;
            }

            ul {
                li {
                    padding: 0.8rem;

                    a {
                        &.active {
                            font-weight: 500;
                        }

                        font-style: italic;
                        font-weight: 300;
                        background-image: linear-gradient(
                            90deg,
                            rgb(139, 138, 138),
                            rgb(65, 65, 65)
                        );
                        background-size: 0% 2px;
                        background-repeat: no-repeat;
                        background-position: left bottom;

                        transition: background-size 300ms ease-in-out, font-weight 200ms ease;
                    }
                    a:hover {
                        background-size: 100% 2px;
                    }
                }
            }
        }
    }
</style>
