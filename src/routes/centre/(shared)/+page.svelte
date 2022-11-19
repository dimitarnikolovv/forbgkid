<script>
    import MarkedData from '../../../components/MarkedData.svelte';
    export let data;
</script>

<svelte:head>
    <title>{data.centre.title}</title>
</svelte:head>

<MarkedData
    markedData={{
        title: data.centre.title,
        content: data.centre.content,
        media: { data: data.centre.fullscreen_media.data },
    }}
/>
