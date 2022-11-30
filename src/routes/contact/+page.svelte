<script>
    import Main from '/src/components/Main.svelte';
    import Section from '/src/components/Section.svelte';
    import MarkedData from '../../components/MarkedData.svelte';

    export let data;
</script>

<svelte:head>
    <title>{data.contact.title}</title>
</svelte:head>

<Main>
    <Section>
        <MarkedData
            markedData={{
                title: data.contact.title,
                content: data.contact.content,
                media: { data: data.contact.fullscreen_media.data },
            }}
        />
    </Section>
</Main>
