<script>
    import MarkedData from '../../components/MarkedData.svelte';

    export let data;
</script>

<svelte:head>
    <title>{data.donate.title}</title>
</svelte:head>

<MarkedData
    markedData={{
        title: data.donate.title,
        content: data.donate.content,
        media: { data: data.donate.fullscreen_media.data },
    }}
/>
