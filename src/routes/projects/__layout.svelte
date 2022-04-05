<script>
    import projects from './projects.json';
    import Main from '/src/components/Main.svelte';
    import Section from '/src/components/Section.svelte';
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
                        {#each projects as { name, id }}
                            <li><a href="/projects/{id}">{name}</a></li>
                        {/each}
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
