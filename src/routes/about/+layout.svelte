<script>
    import Main from '/src/components/Main.svelte';
    import Section from '/src/components/Section.svelte';
    import { page } from '$app/stores';

    $: pathEnd = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1);
</script>

<Main>
    <Section>
        <div class="section-wrap">
            <div class="content">
                <slot />
            </div>
            <aside>
                <h1>Още</h1>
                <nav>
                    <ul>
                        <li>
                            <a class:active={pathEnd === 'about'} href="/about">Как помагаме</a>
                        </li>
                        <li>
                            <a class:active={pathEnd === 'mission'} href="/about/mission">Мисия</a>
                        </li>
                        <li>
                            <a class:active={pathEnd === 'purpose'} href="/about/purpose"
                                >Цели и дейности</a
                            >
                        </li>
                        <li>
                            <a
                                class:active={pathEnd === 'candidate-criteria'}
                                href="/about/candidate-criteria">Критерии за подбор на кандидати</a
                            >
                        </li>
                    </ul>
                </nav>
            </aside>
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

                        transition: background-size 300ms ease-in-out;
                    }
                    a:hover {
                        background-size: 100% 2px;
                    }
                }
            }
        }
    }
</style>
