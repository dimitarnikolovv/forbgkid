<script>
    import MarkedData from '$lib/components/MarkedData.svelte';
    export let data;
</script>

<svelte:head>
    <title>{data.project.attributes.title}</title>
</svelte:head>

<MarkedData
    markedData={{
        title: data.project.attributes.title,
        content: data.project.attributes.content,
        media: { data: data.project.attributes.fullscreen_media },
    }}
/>
