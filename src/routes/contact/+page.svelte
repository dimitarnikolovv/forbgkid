<script>
    import Main from '$lib/components/Main.svelte';
    import Section from '$lib/components/Section.svelte';
    import MarkedData from '$lib/components/MarkedData.svelte';

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
