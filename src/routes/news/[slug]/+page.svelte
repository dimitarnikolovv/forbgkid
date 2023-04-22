<script>
    import Main from '$lib/components/Main.svelte';
    import Section from '$lib/components/Section.svelte';
    import MarkedData from '$lib/components/MarkedData.svelte';
    export let data;
    const dateCreated = new Date(data.post.createdAt);
</script>

<svelte:head>
    <title>{data.post.title}</title>
</svelte:head>

<Main>
    <Section>
        <article>
            <MarkedData
                markedData={{
                    title: data.post.title,
                    content: data.post.content,
                    date: dateCreated,
                    media: { data: false },
                }}
            />
        </article>
    </Section>
</Main>
