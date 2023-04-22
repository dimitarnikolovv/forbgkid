<script>
    import Main from '$lib/components/Main.svelte';
    import MarkedData from '$lib/components/MarkedData.svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    import Section from '$lib/components/Section.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import Entry from '$lib/components/Entry.svelte';
    import Button from '$lib/components/Button.svelte';

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
            <div>
                <h1>Актуално</h1>

                <div class="entry-wrap">
                    {#each data.postsPreview as entry}
                        <Entry passedData={entry} targetEndpoint={'/news'} />
                    {/each}
                </div>
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
        gap: 4rem;
    }

    .entry-wrap {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    :global(.wrapper .entry-wrap h1 a) {
        color: black;
        background: none;
        font-weight: normal;
        font-style: normal;
    }
</style>
