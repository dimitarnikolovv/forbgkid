<script>
    import Section from '../../../components/Section.svelte';
    import MarkedData from '../../../components/MarkedData.svelte';
    export let data;
    const dateCreated = new Date(data.post.createdAt);
</script>

<Section>
    <MarkedData
        markedData={{
            title: data.post.title,
            content: data.post.content,
            date: dateCreated,
            media: { data: data.post.media.data },
        }}
    />
</Section>
