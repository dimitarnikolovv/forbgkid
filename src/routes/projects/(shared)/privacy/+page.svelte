<script>
    import MarkedData from '../../../../components/MarkedData.svelte';

    export let data;
</script>

<svelte:head>
    <title>{data.privacy.title}</title>
</svelte:head>

<MarkedData
    markedData={{
        title: data.privacy.title,
        content: data.privacy.content,
        media: { data: false },
    }}
/>
