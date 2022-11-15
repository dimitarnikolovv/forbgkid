<script>
    import { marked } from 'marked';
    import Main from '../components/Main.svelte';
    import Carousel from '../components/Carousel.svelte';
    import Section from '../components/Section.svelte';

    export let data;
</script>

<svelte:head>
    <title>Шанс за децата на България - Фондация за млади таланти</title>
</svelte:head>

<Main>
    <Carousel slides={data.homepage.carousel.data} />
    <Section>
        <div class="section-wrap">
            <div class="content">
                <div>
                    {@html marked(data.homepage.content)}
                </div>
                <div>
                    {@html marked(data.homepage.content2)}

                    <div class="btn"><a href="/centre">Още за Центъра</a></div>
                </div>
            </div>
            <aside>
                <h3>Актуално</h3>
                <ul>
                    {#each data.postsPreview as post}
                        <li>
                            <a href="/news/{post.attributes.slug}">
                                {@html post.attributes.title}
                            </a>
                        </li>
                    {/each}
                </ul>

                <div class="btn"><a href="/news">Покажи всички</a></div>
            </aside>
        </div>
    </Section>
</Main>

<style lang="scss">
    .section-wrap {
        display: flex;
        gap: 1rem;

        @media only screen and (max-width: 1080px) {
            flex-direction: column;
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }

        aside {
            position: sticky;
            top: 10rem;
            width: 100%;
            height: fit-content;
            background-color: wheat;
            padding-block: 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            h3 {
                font-size: xx-large;
                padding-block: 0.8rem;
            }

            ul {
                li {
                    padding: 0.8rem;

                    a {
                        font-style: italic;
                        font-weight: 300;
                        background-image: linear-gradient(90deg, rgb(32, 32, 32), rgb(65, 65, 65));
                        background-size: 0% 2px;
                        background-repeat: no-repeat;
                        background-position: left bottom;

                        transition: background-size 200ms ease-in-out;
                    }
                    a:hover {
                        background-size: 100% 2px;
                    }
                }
            }
        }

        .btn {
            margin-block: 2rem;
            padding-block: 0.5rem;
            padding-inline: 1rem;
            border-left: 4px solid black;
            border-right: 3px solid black;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            border-radius: 40% 60%;
            width: fit-content;

            transition: border-radius 200ms ease;

            a {
                font-style: italic;
                background-image: linear-gradient(90deg, rgb(115, 167, 245), rgb(0, 86, 214));
                background-size: 0% 1px;
                background-repeat: no-repeat;
                background-position: left bottom;
                transition: color 150ms ease, background-size 200ms ease-in-out;
            }

            &:hover {
                border-left: 4px solid rgba(0, 86, 214, 0.87);
                border-right: 3px solid rgba(0, 86, 214, 0.87);
                border-top: 1px solid rgba(0, 86, 214, 0.87);
                border-bottom: 1px solid rgba(0, 86, 214, 0.87);
                border-radius: 35% 65%;

                a {
                    color: rgba(0, 86, 214, 0.87);
                    background-size: 100% 1px;
                }
            }
        }
    }
</style>
