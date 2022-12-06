<script>
    import Main from '../components/Main.svelte';
    import MarkedData from '../components/MarkedData.svelte';
    import Carousel from '../components/Carousel.svelte';
    import Section from '../components/Section.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    import Entry from '../components/Entry.svelte';
    import Button from '../components/Button.svelte';

    export let data;
</script>

<svelte:head>
    <title>Шанс за децата на България - Фондация за млади таланти</title>
</svelte:head>

<Carousel slides={data.homepage.carousel.data} />

<Main>
    <Section>
        <div class="wrapper">
            <MarkedData
                markedData={{
                    content: data.homepage.content,
                    media: { data: data.homepage.fullscreen_media.data },
                    button: { text: 'Още за Центъра', link: '/centre' },
                }}
            />

            <div class="entry-wrap">
                <h1>Актуално</h1>

                {#each data.postsPreview as entry}
                    <Entry passedData={entry} targetEndpoint={'/news'} />
                {/each}

                <Button params={{ text: 'Вижте всички', link: '/news' }} />
            </div>
        </div>
    </Section>

    <Sidebar title="Важно">
        <li>
            <a href="mailto:info@forbgkids.org">
                Пишете ни за вашите интереси и умения, изпратете ни вашите творчески материали и
                отличия.
            </a>
        </li>
        <li>
            <a href={data.homepage.application_form.data.attributes.url}>
                Формуляр за кандидатстване (.doc). Очакваме Ви!
            </a>
        </li>
        <li>
            <a href="/projects/privacy"> Политика за поверителност на личните данни </a>
        </li>
        <li>
            <a href="/projects/calendar"> Календар </a>
        </li>
    </Sidebar>
</Main>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
    }

    .entry-wrap {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-block-start: 5rem;
    }

    :global(.wrapper .entry-wrap h1 a) {
        color: black;
    }
</style>
