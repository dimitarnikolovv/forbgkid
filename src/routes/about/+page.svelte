<script>
    import MarkedData from '../../components/MarkedData.svelte';

    export let data;
</script>

<svelte:head>
    <title>{data.about.title}</title>
</svelte:head>

<MarkedData
    markedData={{
        title: data.about.title,
        content: data.about.content,
        media: { data: data.about.fullscreen_media.data },
    }}
/>
