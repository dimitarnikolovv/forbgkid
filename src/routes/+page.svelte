<script>
    import { marked } from 'marked';
    import Main from '../components/Main.svelte';
    import Carousel from '../components/Carousel.svelte';
    import Section from '../components/Section.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    import Button from '../components/Button.svelte';

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

                    <Button params={{ text: 'Още за Центъра', link: '/centre' }} />
                </div>
            </div>
            <Sidebar title="Актуално" button={{ text: 'Виж всички', link: '/news' }}>
                {#each data.postsPreview as post}
                    <li>
                        <a href="/news/{post.attributes.slug}">
                            {@html post.attributes.title}
                        </a>
                    </li>
                {/each}
            </Sidebar>
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
    }
</style>
