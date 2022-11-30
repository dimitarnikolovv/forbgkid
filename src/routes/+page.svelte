<script>
    import Main from '../components/Main.svelte';
    import MarkedData from '../components/MarkedData.svelte';
    import Carousel from '../components/Carousel.svelte';
    import Section from '../components/Section.svelte';
    import Sidebar from '../components/Sidebar.svelte';

    export let data;
</script>

<svelte:head>
    <title>Шанс за децата на България - Фондация за млади таланти</title>
</svelte:head>

<Carousel slides={data.homepage.carousel.data} />

<Main>
    <Section>
        <MarkedData
            markedData={{
                content: data.homepage.content,
                media: { data: data.homepage.fullscreen_media.data },
                button: { text: 'Още за Центъра', link: '/centre' },
            }}
        />
    </Section>

    <Sidebar title="Актуално" button={{ text: 'Виж всички', link: '/news' }}>
        {#each data.postsPreview as post}
            <li>
                <a href="/news/{post.attributes.slug}">
                    {@html post.attributes.title}
                </a>
            </li>
        {/each}
    </Sidebar>
</Main>
